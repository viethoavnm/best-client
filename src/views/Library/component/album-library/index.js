import {
  Button,
  CardActionArea,
  CardMedia,
  createStyles,
  Divider,
  Grid,
  makeStyles
} from '@material-ui/core';
import {
  AccessTime,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter
} from '@material-ui/icons';
import ShareSocial from 'components/ShareSocial';
import { useState, useEffect, Fragment } from 'react';
import useStylesLibrary from 'views/Library/style';
import NewsEvent from 'views/Search/component/news-event';
import useStylesDetailVideo from '../detail-video/style';
import CarouselImg from './component/carousel-img';
import { Container } from 'components';
import { getArticleDetail } from 'services/articles';
import { getSafeValue, getTransObj } from 'utils';
import moment from 'moment';
import { DATE_FORMAT } from 'utils/constant';
import { useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

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

const AlbumLibrary = props => {
  const classes = useStyles();
  const classesDetailVideo = useStylesDetailVideo();
  const classesLibrary = useStylesLibrary();
  const [openCarousel, setOpenCarousel] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [listImg, setListImg] = useState([]); // list image.
  const image = getSafeValue(data, 'urlImg', '');
  const name = getSafeValue(data, 'name', '');
  const authorName = getSafeValue(data, 'authorName', '');
  const title = getSafeValue(data, 'title', '');
  const startTime = getSafeValue(data, 'publishedAt', '');
  // const date = new Date(startTime);
  const formatDate = moment(startTime).format(DATE_FORMAT);
  const lang = useSelector(state => state.multiLang.lang);

  const transformData = obj => {
    const transArr = getSafeValue(obj, 'translations', []);
    const objTrans = getTransObj(transArr, lang);
    const { _id, ...res } = objTrans;
    return { ...obj, ...res };
  };

  useEffect(() => {
    const id = props.match.params.id;

    setLoading(true);
    getArticleDetail(id)
      .then(res => {
        // console.log('res', res);
        const dataRes = getSafeValue(res, 'data', {});
        const newData = transformData(dataRes);
        const sourceImgs = getSafeValue(dataRes, 'sources', []);
        setListImg(sourceImgs);
        setData(newData);
      })
      .catch(err => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <Grid container spacing={4} style={{ padding: '25px 0' }}>
        <Grid item xs={12} md={8}>
          <div className={classesDetailVideo.title}>title </div>

          <div className={classesDetailVideo.shareBox}>
            {/* <Button className={classesDetailVideo.libraryBtn}>THƯ VIỆN</Button> */}
            <div className={classesDetailVideo.time}>
              <AccessTime className={classesDetailVideo.timeIcon} />
              <div>{formatDate}</div>
            </div>

            <ShareSocial />
          </div>

          <CarouselImg
            listImg={listImg}
            open={openCarousel}
            onClose={() => setOpenCarousel(false)}
          />

          <Grid container spacing={2}>
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
                {listImg.map(url => {
                  return (
                    <Grid item xs={12} sm={6} md={4}>
                      <CardActionArea
                        // className={classes.imageBox}
                        onClick={() => setOpenCarousel(true)}>
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

          <div className={classesDetailVideo.author}>{authorName}</div>
          <Divider className={classesDetailVideo.divider} />
        </Grid>

        <Grid item xs={12} md={4} className={classesLibrary.rightSidebar}>
          <NewsEvent />
        </Grid>
      </Grid>
    </Container>
  );
};
export default AlbumLibrary;
