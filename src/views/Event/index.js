import { Card, CardActionArea, CardMedia, Divider } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { Container, Title } from 'components';
import RightNews from 'components/RightNews';
import Lodash from 'lodash';
import moment from 'moment';
import 'moment/locale/vi';
import React, { Fragment, useEffect, useState } from 'react';
import DayPicker from 'react-day-picker';
import MomentLocaleUtils from 'react-day-picker/moment';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getEventByYear } from 'services/event';
import { convertTranslations, formatDateTime } from 'utils';
import EventCardLarge from '../../components/EventCardLarge';
import '../Home/day-picker.css';
import useStyles from './style';

const Event = () => {
  const classes = useStyles();
  const [dateSelected, changeDateSelected] = useState(new Date());
  const [currentEvent, changeCurrentEvent] = useState({});
  const [listEvent, setListEvent] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const lang = useSelector(state => state.multiLang.lang);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setLoading(true);
    getEventByYear(year)
      .then(res => {
        let data = res.data;
        if (Array.isArray(data)) {
          data.forEach(element => {
            convertTranslations(element);
          });
          data.sort((a, b) => {
            let timeA = new Date(a?.startDate);
            let timeB = new Date(b?.startDate);
            if (isNaN(timeA)) return 1;
            if (isNaN(timeB)) return -1;
            return timeB - timeA;
          });
        }
        setListEvent(data);
      })
      .catch(err => {})
      .finally(() => {
        setLoading(false);
      });
  }, [year]);

  useEffect(() => {
    setCurrentEvent();
  }, [dateSelected, listEvent]);

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
      <Card elevation={0}>
        <CardActionArea
          component={Link}
          to={`/event/${currentEvent?.[lang]?.slug}`}>
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
                {currentEvent?.[lang]?.name}
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
                <p className={classes.addressItem}>
                  {currentEvent?.[lang]?.address}
                </p>
              </Box>

              <Box display="flex" alignItems="center" flexDirection="row">
                <CardMedia
                  className={classes.media}
                  image="images/ic-clock-white.svg"
                  alt="location"
                />
                <p className={classes.addressItem}>
                  {formatDateTime(currentEvent?.startDate)}
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
      <Helmet>
        <title>{t('titleEvent')} - BEST</title>
      </Helmet>
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
                <div className={classes.title}>
                  {t('eventIn') + new Date().getFullYear()}
                </div>
              </Title>

              {!loading ? (
                <div className={classes.eventList}>
                  {listEvent
                    .filter(
                      event =>
                        new Date(event.startDate) <=
                        new Date().setMonth(new Date().getMonth() + 3)
                    )
                    .map(item => {
                      return (
                        <Fragment key={item?._id}>
                          <CardActionArea
                            component={Link}
                            to={`/event/${item?.[lang]?.slug}`}
                            style={{ textDecoration: 'none' }}>
                            <EventCardLarge item={item} lang={lang} />
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
