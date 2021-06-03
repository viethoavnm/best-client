import { Hidden } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Container, Title } from 'components';
import RightNews from 'components/RightNews';
import Lodash from 'lodash';
import moment from 'moment';
import 'moment/locale/vi';
import React, { Fragment, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { getArticle, getArticleDetail } from 'services/articles';
import { convertTranslations, getSafeValue, getTransObj } from 'utils';
import { DATE_FORMAT } from 'utils/constant';
import RelatedPost from '../../components/RelatedPost';
import ShareSocial from '../../components/ShareSocial';
import { removeHTMLTag, truncateString } from '../../helpers';
import Error404 from '../../views/Error404';
import Error500 from '../../views/Error500';
import useStyles from './styles';
const PostDetail = props => {
  const { slug } = useParams();
  const history = useHistory();
  const classes = useStyles();
  const [data, setData] = useState({});
  const [dataSuggest, setDataSuggest] = useState([]);
  const lang = useSelector(state => state.multiLang.lang);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(0);
  const { t } = useTranslation();
  const startTime = Lodash.get(data, 'publishedAt', '');
  const formatDate = moment(startTime).format(DATE_FORMAT);
  const transformData = obj => {
    const transArr = getSafeValue(obj, 'translations', []);
    const objTrans = getTransObj(transArr, lang);
    return { ...obj, ...objTrans };
  };

  useEffect(() => {
    if (data?._id) {
      history.replace({ pathname: `${data?.[lang]?.slug}` });
    }
  }, [lang, data]);

  useEffect(() => {
    if (data?.[lang]?.slug === slug) return;
    setLoading(true);
    getArticleDetail(slug)
      .then(res => {
        if (res.data?._id) {
          const dataRes = Lodash.get(res, 'data', {});
          const newData = transformData(dataRes);
          setData(convertTranslations(newData));
          setLoadError(0);
        } else {
          setLoadError(404);
        }
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
    if (dataSuggest.length) {
      const dataGet = dataSuggest.reduce((arr, cur) => {
        const newData = transformData(cur);
        return [...arr, newData];
      }, []);
      setDataSuggest(dataGet);
    }
  }, [lang]);

  const renderSubHeader = () => {
    return (
      <Fragment>
        <h2 className={classes.titlePost}>{data?.[lang]?.title}</h2>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          marginBottom="24px"
          alignItems="center">
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center">
            <CardMedia
              className={classes.smallClock}
              image="/images/ic-small-clock.svg"
              alt="small-clock"
            />

            <Typography className={classes.timeSuggest}>
              {formatDate}
            </Typography>
          </Box>

          <ShareSocial />
        </Box>
      </Fragment>
    );
  };

  const _renderContentEvent = () => {
    const content = Lodash.get(data, 'content', '');
    const htmlContent = Lodash.unescape(content);

    return (
      <Box>
        {renderSubHeader()}

        <div
          className="ck-content"
          dangerouslySetInnerHTML={{
            __html: htmlContent
          }}
        />
        <div className={classes.author}>{data?.authorName}</div>
        <Divider className={classes.divider} />
      </Box>
    );
  };
  const metaDescription = truncateString(
    removeHTMLTag(Lodash.unescape(Lodash.get(data, 'description')))
  );
  const metaTitle = `${
    data?.[lang]?.title ? data?.[lang]?.title : t('titleArticles')
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
        {loadError !== 404 && loadError !== 500 && (
          <div className={classes.header}>
            <Title size="large">
              <div className={classes.titleSection}>{t('titleArticles')}</div>
              <div className={classes.breadcrumb}>
                {t('txtHome')} / {t('titleArticles')}
              </div>
            </Title>
          </div>
        )}

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
        ) : loadError === 500 ? (
          <Error500 />
        ) : (
          <Fragment>
            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                {/* <CardMedia className={classes.thumbnail} alt="" image={image} /> */}
                {_renderContentEvent()}
              </Grid>
              <Grid item xs={12} md={4}>
                <Hidden smDown>
                  <RightNews />
                </Hidden>
              </Grid>
            </Grid>
            <RelatedPost post={data} />
          </Fragment>
        )}
      </Container>
    </Fragment>
  );
};

export default PostDetail;
