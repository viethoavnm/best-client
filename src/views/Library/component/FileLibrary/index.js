import {
  Button,
  CardActionArea,
  CardMedia,
  createStyles,
  Divider,
  Grid,
  makeStyles
} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { AccessTime } from '@material-ui/icons';
import { Container } from 'components';
import RightNews from 'components/RightNews';
import ShareSocial from 'components/ShareSocial';
import moment from 'moment';
import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getArticleDetail } from 'services/articles';
import { convertTranslations, getSafeValue } from 'utils';
import { DATE_FORMAT, TYPE_MENU } from 'utils/constant';
import Error500 from 'views/Error500';
import useStylesLibrary from 'views/Library/style';
import useStylesDetailVideo from '../detail-video/style';

const useStyles = makeStyles(() =>
  createStyles({
    imageBox: {
      position: 'relative',
      paddingBottom: '77%'
    },
    image: {
      height: 0,
      paddingTop: '77%',
      borderRadius: 6
      // position: 'absolute',
      // maxWidth: '100%',
      // maxHeight: '100%',
      // borderRadius: 4
    }
  })
);

const FileLibrary = props => {
  const classes = useStyles();
  const history = useHistory();
  const id = props.match.params.id;
  const classesDetailVideo = useStylesDetailVideo();
  const classesLibrary = useStylesLibrary();
  const [openCarousel, setOpenCarousel] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(0);
  const [data, setData] = useState({});
  const [listImg, setListImg] = useState([]); // list image.
  const image = getSafeValue(data, 'urlImg', '');
  const name = getSafeValue(data, 'name', '');
  const authorName = getSafeValue(data, 'authorName', '');
  const title = getSafeValue(data, 'title', '');
  const startTime = getSafeValue(data, 'publishedAt', '');
  // const date = new Date(startTime);
  const formatDate = moment(startTime).format(DATE_FORMAT);
  const menuData = useSelector(state => state.setup.menu);
  const lang = useSelector(state => state.multiLang.lang);
  const [libraryMenu, setLibraryMenu] = useState();

  useEffect(() => {
    if (Array.isArray(menuData)) {
      let libraryMenu = menuData.find(menu => menu?.type === TYPE_MENU.LIBRARY);
      setLibraryMenu(convertTranslations({ ...libraryMenu }));
    }
  }, [menuData]);

  useEffect(() => {
    setLoading(true);
    getArticleDetail(id)
      .then(res => {
        setData(convertTranslations(res.data));
      })
      .catch(err => {
        setLoadError(err.response.status);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      {loadError === 404 ? (
        <Error404 />
      ) : loadError === 500 ? (
        <Error500 />
      ) : (
        <>
          <Grid container spacing={4} className={classesDetailVideo.container}>
            <Grid item xs={12} md={8}>
              <div className={classesDetailVideo.title}>
                {data?.[lang]?.title}
              </div>
              <div className={classesDetailVideo.shareBox}>
                <Button className={classesDetailVideo.libraryBtn}>
                  THƯ VIỆN
                </Button>
                <div className={classesDetailVideo.time}>
                  <AccessTime className={classesDetailVideo.timeIcon} />
                  <div>{formatDate}</div>
                </div>
                <ShareSocial />
              </div>
              <div className={classesDetailVideo.description}>
                {data?.[lang]?.description}
              </div>
              <Grid container spacing={3}>
                {loading ? (
                  <div
                    style={{
                      height: 80,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                    <CircularProgress size={30} style={{ color: '#A0BE37' }} />
                  </div>
                ) : (
                  <Fragment>
                    {Array.isArray(data?.sources) &&
                      data?.sources.map((url, index) => {
                        return (
                          <Grid item xs={12} sm={6} md={4} key={index}>
                            <CardActionArea
                              component={Link}
                              to={`/library/file/${id}/${index}`}
                              // className={classes.imageBox}
                            >
                              <CardMedia
                                className={classes.image}
                                // component="img"
                                image={'/images/ic_pdf.svg'}
                                title=""
                              />
                            </CardActionArea>
                          </Grid>
                        );
                      })}
                  </Fragment>
                )}
              </Grid>

              <div className={classesDetailVideo.author}>{authorName}</div>
              <Divider className={classesDetailVideo.divider} />
            </Grid>
            <Grid item xs={12} md={4} className={classesLibrary.rightSidebar}>
              <RightNews />
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default FileLibrary;
