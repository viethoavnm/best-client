import { Container, Title } from 'components';
import Box from '@material-ui/core/Box';
import React, { useRef, Fragment, useEffect, useState } from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import { VI_LANG } from 'utils/constant';
import CircularProgress from '@material-ui/core/CircularProgress';

import Lodash from 'lodash';
import moment from 'moment';
import { useHistory, useLocation } from 'react-router-dom';
import useStyles from './styles';
import 'moment/locale/vi';
import { getArticleDetail, getArticle } from 'services/articles';
import renderHTML from 'react-render-html';
import NewsEvent from 'views/Search/component/news-event';
import { Hidden } from '@material-ui/core';
import ShareSocial from '../../components/ShareSocial';
import './img-html.css';
import { useSelector } from 'react-redux';

const DATE_FORMAT = 'hh:mm A - DD/MM/YYYY';
const DATE_FORMAT_2 = 'DD/MM/YYYY';
const PostDetail = props => {
  const limitSuggest = 4;
  const classes = useStyles();
  const pageLayout = useRef(null);
  const history = useHistory();
  const location = useLocation();
  const [data, setData] = useState({});
  const [dataSuggest, setDataSuggest] = useState([]);
  // const [lang, setLang] = useState(VI_LANG);
  const lang = useSelector(state => state.multiLang.lang);
  const [loading, setLoading] = useState(true);

  const image = Lodash.get(data, 'urlImg', '');
  const name = Lodash.get(data, 'name', '');
  const address = Lodash.get(data, 'address', '');
  const startTime = Lodash.get(data, 'startDate', '');
  const date = new Date(startTime);
  const formatDate = moment(date).format(DATE_FORMAT);
  const month = moment(date).month() + 1; // Moment base month on 0
  const day = moment(date).date();
  const dayStr = moment(date).format('dddd');

  const transformData = obj => {
    const transArr = Lodash.get(obj, 'translations', []);
    const objTrans = Lodash.find(transArr, obj => obj.lang === lang);
    const { _id, ...res } = objTrans;
    return { ...obj, ...res };
  };

  useEffect(() => {
    const id = props.match.params.id;

    setLoading(true);
    getArticleDetail(id)
      .then(res => {
        const dataRes = Lodash.get(res, 'data', {});
        const newData = transformData(dataRes);
        setData(newData);
      })
      .catch(err => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const { category } = data;
    if (category) {
      getArticle({ category: category._id })
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
                  Tháng {month}
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
    );
  };

  const handleClickItem = item => {
    //
  };

  const _renderItem = item => {
    const imageItem = Lodash.get(item, 'urlImg', '');
    const nameItem = Lodash.get(item, 'title', '');
    const startTimeItem = Lodash.get(item, 'publishedAt', '');
    const dateItem = new Date(startTimeItem);
    const formatDateItem = moment(dateItem).format(DATE_FORMAT_2);

    return (
      <ListItem onClick={() => handleClickItem(item)}>
        <Box>
          <CardMedia
            className={classes.thumbnailSuggest}
            alt=""
            image={imageItem}
          />
          <Typography className={classes.titleItemSuggest}>
            {nameItem}
          </Typography>

          <Box display="flex" flexDirection="row">
            <CardMedia
              className={classes.smallClock}
              image="/images/ic-small-clock.svg"
              alt="small-clock"
            />
            <Typography className={classes.timeSuggest}>
              {formatDateItem}
            </Typography>
          </Box>
        </Box>
      </ListItem>
    );
  };

  const _renderSuggestEvents = () => {
    const listSuggest = dataSuggest.slice(0, limitSuggest);

    return (
      <List className={classes.listSuggest}>
        {listSuggest.map(item => _renderItem(item))}
      </List>
    );
  };

  const renderSubHeader = () => {
    return (
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        marginBottom="30px"
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

          <Typography className={classes.timeSuggest}>{formatDate}</Typography>
        </Box>

        <ShareSocial />
      </Box>
    );
  };

  const _renderContentEvent = () => {
    const content = Lodash.get(data, 'content', '');
    const htmlContent = Lodash.unescape(content);

    return (
      <Box>
        {renderSubHeader()}

        <div
          className="dynamic-content-div"
          // className={classes.boxSuggest}
          // id="id_articel_suggest"
          dangerouslySetInnerHTML={{
            __html: htmlContent
          }}></div>

        <Divider className={classes.divider} />
        {_renderTitle('BÀI VIẾT LIÊN QUAN')}

        {_renderSuggestEvents()}
      </Box>
    );
  };

  return (
    <Container bgcolor="#FDFDFD">
      <div className={classes.header}>
        <Title size="large">
          <div className={classes.titleSection}>Bài viết</div>
          <div className={classes.breadcrumb}>Trang chủ / Bài viết</div>
        </Title>
      </div>

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
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              {/* <CardMedia className={classes.thumbnail} alt="" image={image} /> */}
              {_renderContentEvent()}
            </Grid>

            <Hidden mdDown>
              <Grid item xs={12} md={4}>
                <NewsEvent />
              </Grid>
            </Hidden>
          </Grid>
        </Fragment>
      )}
    </Container>
  );
};

export default PostDetail;
