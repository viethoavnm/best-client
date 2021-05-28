import { Hidden } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Container } from 'components';
import RightNews from 'components/RightNews';
import Lodash from 'lodash';
import moment from 'moment';
import 'moment/locale/vi';
import React, { Fragment, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getEvent, getEventDetail } from 'services/event';
import { convertTranslations, formatDateLang, getSafeValue } from 'utils';
import Error404 from 'views/Error404';
import Error500 from 'views/Error500';
import useStyles from './styles';

const DATE_FORMAT = 'hh:mm A - DD/MM/YYYY';
const DATE_FORMAT_2 = 'DD/MM/YYYY';
const EventDetail = props => {
  moment.locale('vi');
  const classes = useStyles();
  const { slug } = useParams();
  const history = useHistory();
  const [event, setEvent] = useState({});
  const lang = useSelector(state => state.multiLang.lang);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(0);
  const [suggestEvent, setSuggestEvent] = useState([]);
  const { t } = useTranslation();
  const image = Lodash.get(event, 'urlImg', '');
  const startTime = Lodash.get(event, 'startDate', '');
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
    if (event?._id) {
      history.replace({ pathname: `${event?.[lang]?.slug}` });
    }
  }, [lang, event]);

  useEffect(() => {
    setLoading(true);
    getEventDetail(slug)
      .then(res => {
        const data = getSafeValue(res, 'data', {});
        const newData = transformData(data);
        setEvent(convertTranslations(newData));
      })
      .catch(err => {
        setLoadError(err.response?.status || 404);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const params = { limit: 4, isPublish: 1 };
    getEvent(params)
      .then(res => {
        console.log(res);
        const data = getSafeValue(res, 'data.results', []);
        const newList = Lodash.map(data, obj => {
          return transformData(obj);
        });
        console.log(newList);
        setSuggestEvent(newList);
      })
      .catch(err => {
        setLoadError(err.response?.status || 404);
      });
  }, []);

  useEffect(() => {
    if (event._id) {
      const newData = transformData(event);
      setEvent(newData);
    }
    if (suggestEvent.length) {
      const newList = Lodash.map(suggestEvent, obj => {
        return transformData(obj);
      });
      console.log(newList);
      setSuggestEvent(newList);
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
            <Typography className={classes.titleItem}>{event?.name}</Typography>

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
              <Typography className={classes.addressItem}>
                {event?.address}
              </Typography>
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
    history.push(`/event/${item._id}`);
  };

  const _renderItem = item => {
    const imageItem = Lodash.get(item, 'urlImg', '');
    const nameItem = Lodash.get(item, 'name', '');
    const startTimeItem = Lodash.get(item, 'startDate', '');
    const dateItem = new Date(startTimeItem);
    const formatDateItem = moment(dateItem).format(DATE_FORMAT_2);

    return (
      <ListItem
        onClick={() => handleClickItem(item)}
        className={classes.itemSuggest}>
        <Box className={classes.boxSuggest}>
          <CardMedia
            className={classes.thumbnailSuggest}
            alt=""
            image={imageItem}
          />
          <div>
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
          </div>
        </Box>
      </ListItem>
    );
  };

  const _renderSuggestEvents = () => {
    return (
      <List className={classes.listSuggest}>
        {suggestEvent
          .sort(
            (a, b) =>
              new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
          )
          .map((item, index) => {
            return (
              <Grid
                item
                key={index}
                xs={12}
                sm={6}
                md={4}
                className={classes.gridSuggest}>
                {_renderItem(item)}
              </Grid>
            );
          })}
      </List>
    );
  };

  const _renderContentEvent = () => {
    const content = Lodash.get(event, 'content', '');
    const htmlContent = Lodash.unescape(content);

    return (
      <Box>
        {_renderTitle(`${t('txtIntroduce')}`)}
        {/* {renderHTML(htmlContent)} */}
        <div
          className="ck-content"
          dangerouslySetInnerHTML={{
            __html: htmlContent
          }}></div>

        <Divider className={classes.divider} />
      </Box>
    );
  };

  return (
    <Container bgcolor="#FDFDFD">
      {loadError === 404 ? (
        <Error404 />
      ) : loadError === 500 ? (
        <Error500 />
      ) : (
        <>
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
              <Box marginTop="40px" />

              <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                  <CardMedia
                    className={classes.thumbnail}
                    alt=""
                    image={image}
                  />

                  {_renderInfoEvent()}
                  {_renderContentEvent()}
                </Grid>

                <Hidden mdDown>
                  <Grid item xs={12} md={4}>
                    <RightNews />
                  </Grid>
                </Hidden>
              </Grid>
              <Grid>
                {suggestEvent.length > 0 && _renderTitle(`${t('otherEvents')}`)}
                {_renderSuggestEvents()}
              </Grid>
            </Fragment>
          )}
        </>
      )}
    </Container>
  );
};

export default EventDetail;
