import React, { useEffect, useState } from 'react';
import { CardActionArea, Divider, Grid } from '@material-ui/core';
import { Container, Title } from 'components';
import EventCardLarge from '../../components/EventCardLarge';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NewsEvent from '../Search/component/news-event';
import useStyles from './style';
import clsx from 'clsx';
import Lodash from 'lodash';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import DayPicker from 'react-day-picker';
import MomentLocaleUtils from 'react-day-picker/moment';
import Card from '@material-ui/core/CardMedia';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import { VI_LANG } from 'utils/constant';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from 'react-router-dom';
import renderHTML from 'react-render-html';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMenuWeb } from '../../reducers/setupSlice.js';
import RightNews from 'components/RightNews';
import { useTranslation } from 'react-i18next';
import 'moment/locale/vi';
import { getEventByYear } from 'services/event';
import { getTransObj } from 'utils';

const DATE_FORMAT = 'hh:mm A - DD/MM/YYYY';

const Event = () => {
  const history = useHistory();
  const classes = useStyles();
  const [dateSelected, changeDateSelected] = useState(new Date());
  const [currentEvent, changeCurrentEvent] = useState({});
  const [events, setEvents] = useState({});
  const [listEvent, setListEvent] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const lang = useSelector(state => state.multiLang.lang);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  // const dispatch = useDispatch();

  const transformData = list => {
    const newList = list.map(obj => {
      const transArr = Lodash.get(obj, 'translations', []);
      const objTrans = getTransObj(transArr, lang);
      const { _id, ...res } = objTrans;
      return { ...obj, ...res };
    });

    return newList;
  };

  // useEffect(() => {
  //   const newList = transformData(listEvent);
  //   setListEvent(newList);
  // }, [lang, listEvent]);

  useEffect(() => {
    setLoading(true);
    getEventByYear(year)
      .then(res => {
        const data = Lodash.get(res, 'data', []);
        const newList = transformData(data);
        setListEvent(newList);
      })
      .catch(err => {})
      .finally(() => {
        setLoading(false);
      });
  }, [year]);

  useEffect(() => {
    setCurrentEvent();
    // }
  }, [dateSelected]);

  useEffect(() => {
    if (listEvent.length) {
      const dataNews = transformData(listEvent);
      setListEvent(dataNews);
      setCurrentEvent(dataNews);
    }
  }, [lang]);

  const compareDate = (firstDate, secondDate) => {
    return moment(firstDate).isSame(secondDate, 'day');
  };

  const setCurrentEvent = data => {
    let res = listEvent;
    if (data?.length) {
      res = data;
    }
    const eventData = Lodash.find(res, event =>
      compareDate(event.startDate, dateSelected)
    );

    // console.log('object', eventData);
    // if (!Lodash.isEmpty(eventData)) {
    changeCurrentEvent(eventData);
  };

  const _renderDay = day => {
    const dateData = day.getDate();
    const dayEvent = Lodash.find(listEvent, event =>
      compareDate(event.startDate, day)
    );
    const isMatchEvent = !Lodash.isEmpty(dayEvent);

    return (
      <div className={clsx('DayPicker-Day---box', isMatchEvent && 'has-event')}>
        <p className={classes.dayDate}>{dateData}</p>
      </div>
    );
  };

  const _renderDayPicker = () => {
    return (
      <DayPicker
        locale={lang}
        localeUtils={MomentLocaleUtils}
        renderDay={_renderDay}
        onDayClick={day => changeDateSelected(day)}
        selectedDays={[dateSelected]}
        onMonthChange={date => {
          setYear(date.getFullYear());
        }}
      />
    );
  };

  const _renderEventDetail = () => {
    if (Lodash.isEmpty(currentEvent)) {
      return (
        <Box
          style={{
            paddingTop: '50px',
            paddingBottom: '50px'
          }}>
          <CardMedia
            alt="img_no_event"
            className={classes.imgNoEvent}
            image="images/img_no_event.svg"
          />
          <Typography className={classes.noEventLable} align="center">
            {t('noEvent')}
          </Typography>
        </Box>
      );
    }

    return (
      <Card className={clsx(classes.eventDetailCard)} elevation={0}>
        <CardActionArea component={Link} to={`/event/${currentEvent?._id}`}>
          <Box position="relative" textAlign="center">
            <CardMedia
              className={classes.thumbnailEvent}
              image={currentEvent?.urlImg}
              alt="image-event"
            />
            <Box
              position="absolute"
              top="50%"
              left="50%"
              className={classes.wrapperDayEvent}>
              <Typography className={classes.dayEvent}>
                {moment(currentEvent?.startDate).date()}
              </Typography>
              <Typography className={classes.weekday}>
                {moment(currentEvent?.startDate).format('dddd')}
              </Typography>
            </Box>
          </Box>

          <Box className={classes.eventDes}>
            <Box display="flex" alignItems="center" flexDirection="column">
              <h2 className={classes.eventTitle} align="center">
                {currentEvent?.name}
              </h2>

              <Box
                display="flex"
                alignItems="center"
                flexDirection="row"
                marginBottom="16px">
                <CardMedia
                  className={classes.media}
                  image="images/ic-location-white.svg"
                  alt="location"
                />
                <p className={classes.addressItem}>{currentEvent?.address}</p>
              </Box>

              <Box display="flex" alignItems="center" flexDirection="row">
                <CardMedia
                  className={classes.media}
                  image="images/ic-clock-white.svg"
                  alt="location"
                />
                <p className={classes.addressItem}>
                  {moment(currentEvent?.startDate).format(DATE_FORMAT)}
                </p>
              </Box>
            </Box>
          </Box>
        </CardActionArea>
      </Card>
    );
  };

  return (
    <Fragment>
      {/* {renderHTML(htmlUnescape)} */}
      <Container>
        <section>
          <Title size="large" className={classes.titleBox}>
            <div className={classes.title}>{t('eventsTitle')}</div>
            <div className={classes.breadcrumb}>
              {t('txtHome')} / {t('titleEvent')}
            </div>
          </Title>

          <Grid container className={classes.rootCard}>
            <Grid item xs={12} md={6} className={clsx(classes.eventLeft)}>
              {_renderEventDetail()}
            </Grid>

            <Grid item xs={12} md={6} className={clsx(classes.eventRight)}>
              {_renderDayPicker()}
            </Grid>
          </Grid>
        </section>

        <section className={clsx(classes.secondSection)}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Title size="large" style={{ marginBottom: 24 }}>
                <div className={classes.title}>{t('upcomingEvents')}</div>
              </Title>

              {!loading ? (
                <div className={classes.eventList}>
                  {listEvent.map(item => {
                    return (
                      <Fragment key={item?._id}>
                        <CardActionArea
                          component={Link}
                          to={`/event/${item._id}`}
                          style={{ textDecoration: 'none' }}>
                          <EventCardLarge item={item} />
                        </CardActionArea>
                        <Divider className={classes.divider} />
                      </Fragment>
                    );
                  })}
                </div>
              ) : (
                <div
                  style={{
                    height: 80,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  <CircularProgress size={30} style={{ color: '#A0BE37' }} />
                </div>
              )}
            </Grid>

            <Grid item xs={12} md={4} className={classes.rightSidebar}>
              <RightNews />
            </Grid>
          </Grid>
        </section>
      </Container>
    </Fragment>
  );
};

export default Event;
