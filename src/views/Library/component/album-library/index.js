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
import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { libraryPath } from 'routes';
import { getArticleDetail } from 'services/articles';
import { convertTranslations, formatDate } from 'utils';
import { TYPE_MENU } from 'utils/constant';
import useStylesLibrary from 'views/Library/style';
import useStylesDetailVideo from '../detail-video/style';
import CarouselImg from './component/carousel-img';

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
    },
    description: {
      fontSize: 14,
      color: '#000000'
    }
  })
);

const AlbumLibrary = props => {
  const classes = useStyles();
  const classesDetailVideo = useStylesDetailVideo();
  const classesLibrary = useStylesLibrary();
  const [selectedItem, setSelectedItem] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
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
    const id = props.match.params.id;
    setLoading(true);
    getArticleDetail(id)
      .then(res => {
        setData(convertTranslations(res?.data));
      })
      .catch(err => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <Grid container spacing={4} className={classesDetailVideo.container}>
        <Grid item xs={12} md={8}>
          <div className={classesDetailVideo.title}>{data?.[lang]?.title}</div>

          <div className={classesDetailVideo.shareBox}>
            <Button
              component={Link}
              to={libraryPath}
              className={classesDetailVideo.libraryBtn}>
              {libraryMenu?.[lang]?.name}
            </Button>
            <div className={classesDetailVideo.time}>
              <AccessTime className={classesDetailVideo.timeIcon} />
              <div>{formatDate(data?.publishedAt)}</div>
            </div>

            <ShareSocial />
          </div>

          <div className={classesDetailVideo.description}>
            {data?.[lang]?.description}
          </div>

          <CarouselImg
            listImg={data?.sources}
            open={selectedItem > -1}
            onClose={() => setSelectedItem(-1)}
            selectedItem={selectedItem}
          />

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
                  data.sources.map((url, index) => {
                    return (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <CardActionArea
                          // className={classes.imageBox}
                          onClick={() => setSelectedItem(index)}>
                          <CardMedia
                            className={classes.image}
                            // component="img"
                            image={url}
                            title=""
                          />
                        </CardActionArea>
                      </Grid>
                    );
                  })}
              </Fragment>
            )}
          </Grid>

          <div className={classesDetailVideo.author}>{data?.authorName}</div>
          <Divider className={classesDetailVideo.divider} />
        </Grid>

        <Grid item xs={12} md={4} className={classesLibrary.rightSidebar}>
          <RightNews />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AlbumLibrary;
