import { Container, Title } from 'components';
import Box from '@material-ui/core/Box';
import React, { Fragment, useEffect, useState, lazy } from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { DATE_FORMAT } from 'utils/constant';
import CircularProgress from '@material-ui/core/CircularProgress';
import RightNews from 'components/RightNews';
import Lodash from 'lodash';
import moment from 'moment';
import useStyles from './styles';
import 'moment/locale/vi';
import { getArticleDetail, getArticle } from 'services/articles';
import { Hidden } from '@material-ui/core';
import ShareSocial from '../../components/ShareSocial';
import RelatedPost from '../../components/RelatedPost';
import { useSelector } from 'react-redux';
import {
  getSafeValue,
  getTransObj,
  formatDateLang,
  convertTranslations
} from 'utils';
import { useTranslation } from 'react-i18next';
import Error404 from '../../views/Error404';
import Error500 from '../../views/Error500';

const PostDetail = props => {
  const limitSuggest = 4;
  const classes = useStyles();
  const [data, setData] = useState({});
  const [dataSuggest, setDataSuggest] = useState([]);
  // const [lang, setLang] = useState(VI_LANG);
  const lang = useSelector(state => state.multiLang.lang);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(0);
  const { t } = useTranslation();

  const image = Lodash.get(data, 'urlImg', '');
  const name = Lodash.get(data, 'name', '');
  const address = Lodash.get(data, 'address', '');
  const startTime = Lodash.get(data, 'publishedAt', '');
  const date = new Date(startTime);
  const formatDate = moment(startTime).format(DATE_FORMAT);
  const month = moment(date).month() + 1; // Moment base month on 0
  const day = moment(date).date();
  const dayStr = moment(date).format('dddd');
  const id = props.match.params.id;
  const transformData = obj => {
    const transArr = getSafeValue(obj, 'translations', []);
    const objTrans = getTransObj(transArr, lang);
    return { ...obj, ...objTrans };
  };

  useEffect(() => {
    setLoading(true);
    getArticleDetail(id)
      .then(res => {
        const dataRes = Lodash.get(res, 'data', {});
        const newData = transformData(dataRes);
        setData(convertTranslations(newData));
      })
      .catch(err => {
        setLoadError(err.response.status);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    const { category } = data;
    if (category) {
      getArticle({ category: category._id, subType: 'single', type: 'news' })
        .then(res => {
          const data = Lodash.get(res, 'data.results', []);
          const dataGet = data.reduce((arr, cur) => {
            const newData = transformData(cur);
            return [...arr, newData];
          }, []);
          setDataSuggest(dataGet);
        })
        .catch(err => {});
    }
  }, [data]);
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
  const _renderInfoEvent = () => {
    return (
      <>
        <Box
          display="flex"
          flexDirection="row"
          marginTop="25px"
          marginBottom="35px">
          <Box bgcolor="#FFFFFF" marginLeft="20px" marginRight="20px">
            <Paper elevation={1}>
              <Box
                bgcolor="#92BF1F"
                paddingTop="5px"
                paddingBottom="5px"
                justifyContent="center"
                alignItems="center"
                marginBottom="13px"
                display="flex"
                paddingRight="30px"
                paddingLeft="30px">
                <Typography
                  align="center"
                  noWrap
                  className={classes.monthEvent}>
                  {t(`${formatDateLang(`Tháng ${month}`)}`)}
                </Typography>
              </Box>

              <Typography align="center" className={classes.dayEvent}>
                {day}
              </Typography>

              <Typography align="center" className={classes.dateEvent}>
                {dayStr}
              </Typography>

              <Box height="10px" />
            </Paper>
          </Box>

          <Box>
            <Typography className={classes.titleItem}>{name}</Typography>

            <Box
              display="flex"
              alignItems="center"
              flexDirection="row"
              marginBottom="15px">
              <CardMedia
                className={classes.media}
                image="/images/ic-location.svg"
                alt="location"
              />
              <Typography className={classes.addressItem}>{address}</Typography>
            </Box>

            <Box display="flex" alignItems="center" flexDirection="row">
              <CardMedia
                className={classes.media}
                image="/images/ic-clock.svg"
                alt="location"
              />
              <Typography className={classes.addressItem}>
                {formatDate}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider className={classes.divider} />
      </>
    );
  };

  const _renderTitle = title => {
    return (
      <div className={classes.header}>
        <Title size="large">
          <div className={classes.titleSection}>{title}</div>
        </Title>
      </div>
    );
  };

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

  return (
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
          {dataSuggest.length > 0 &&
            _renderTitle(`${t('titleArticlesRelate')}`)}
          <Grid container spacing={3} className={classes.gridSuggest}>
            <RelatedPost
              data={dataSuggest.slice(0, limitSuggest)}
              mode="post"
            />
          </Grid>
        </Fragment>
      )}
    </Container>
  );
};

export default PostDetail;
