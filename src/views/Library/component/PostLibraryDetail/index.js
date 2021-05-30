import { Button, Hidden } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { AccessTime } from '@material-ui/icons';
import { Container } from 'components';
import RelatedPost from 'components/RelatedPost';
import RightNews from 'components/RightNews';
import ShareSocial from 'components/ShareSocial';
import { removeHTMLTag, truncateString } from 'helpers';
import Lodash from 'lodash';
import moment from 'moment';
import 'moment/locale/vi';
import React, { Fragment, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { libraryPath } from 'routes';
import { getArticleDetail } from 'services/articles';
import {
  convertTranslations,
  formatDate,
  getSafeValue,
  getTransObj
} from 'utils';
import { TYPE_MENU } from 'utils/constant';
import Error404 from 'views/Error404';
import Error500 from 'views/Error500';
import useStylesDetailVideo from '../detail-video/style';
import useStyles from './styles';

const events = [
  {
    image: '/images/new-1.png',
    name: `Hội thảo “Khí hóa sinh khối - Giải pháp bền vững và kinh tế”.`,
    address: 'Đường số 68, Nguyễn Hoàng, Hà Nội',
    startTime: '2020-03-27T06:30'
  },
  {
    image: '/images/new-1.png',
    name: `Hội thảo hoa quả và thực phẩm lần thứ XXI`,
    address: 'Đường số 8, Thanh Xuân, Triều Khúc, Hà Nội',
    startTime: '2020-06-12T10:30'
  },
  {
    image: '/images/new-1.png',
    name: `Công cuộc đổi mới nông thôn 2021`,
    address: 'Đường số 8, Thanh Xuân, Triều Khúc, Hà Nội',
    startTime: '2020-12-01T15:30'
  },
  {
    image: '/images/new-1.png',
    name: `Xây dựng trường học cho học sinh vùng nông thôn Cao Bằng Xây dựng trường học cho học sinh vùng nông thôn Cao Bằng. Xây dựng trường học cho học sinh vùng nông thôn Cao Bằng.`,
    address: 'Đường số 8, Thanh Xuân, Triều Khúc, Hà Nội',
    startTime: '2020-01-31T10:30'
  }
];

const PostLibraryDetail = props => {
  const { t } = useTranslation();
  const { slug } = useParams();
  const classes = useStyles();
  const classesDetailVideo = useStylesDetailVideo();
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
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(0);
  const startTime = Lodash.get(data, 'startDate', '');

  const transformData = obj => {
    const transArr = getSafeValue(obj, 'translations', []);
    const objTrans = getTransObj(transArr, lang);
    const { ...res } = objTrans;
    return { ...obj, ...res };
  };

  useEffect(() => {
    setLoading(true);
    getArticleDetail(slug)
      .then(res => {
        setData(convertTranslations(res.data));
      })
      .catch(err => {
        setLoadError(err.response?.status || 404);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  useEffect(() => {
    if (data?._id) {
      const newData = transformData(data);
      setData(newData);
    }
  }, [lang]);

  const _renderTitle = title => {
    return (
      <Grid item xs={12} md={12}>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          marginBottom="30px">
          <CardMedia
            className={classes.icSlash}
            image="/images/ic-slash-title.svg"
            alt="slash"
          />
          <Typography className={classes.title}>{title}</Typography>
        </Box>
      </Grid>
    );
  };

  const _renderContentEvent = () => {
    const htmlContent = Lodash.unescape(data?.[lang]?.content);
    return (
      <Box>
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
        <div
          className="ck-content"
          dangerouslySetInnerHTML={{
            __html: htmlContent
          }}
        />
        <Divider className={classes.divider} />
      </Box>
    );
  };
  const metaDescription = truncateString(
    removeHTMLTag(Lodash.unescape(data?.[lang]?.description))
  );
  const metaTitle = `${
    data?.[lang]?.title ? data?.[lang]?.title : t('titleLibrary')
  } - BEST`;
  return (
    <Fragment>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={Lodash.get(data, 'urlImg')} />
      </Helmet>
      <Container bgcolor="#FDFDFD">
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
        ) : loadError === 404 ? (
          <Error404 />
        ) : loadError !== 404 && loadError !== 0 ? (
          <Error500 />
        ) : (
          <Fragment>
            <Grid
              container
              spacing={4}
              className={classesDetailVideo.container}>
              <Grid item xs={12} md={8}>
                <div className={classesDetailVideo.title}>
                  {data?.[lang]?.title}
                </div>
                {_renderContentEvent()}
              </Grid>

              <Hidden mdDown>
                <Grid item xs={12} md={4}>
                  <RightNews />
                </Grid>
              </Hidden>
            </Grid>
            {_renderTitle(`${t('titleArticlesRelate')}`)}
            <Grid container spacing={3} mb={3} className={classes.gridSuggest}>
              <RelatedPost data={events} mode="event" />
            </Grid>
          </Fragment>
        )}
      </Container>
    </Fragment>
  );
};

export default PostLibraryDetail;
