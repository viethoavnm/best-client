import { Card, CardActionArea, CardMedia } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ChevronRight } from '@material-ui/icons';
import clsx from 'clsx';
import { Container, Title } from 'components';
import Lodash from 'lodash';
import moment from 'moment';
import 'moment/locale/vi';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import DayPicker from 'react-day-picker';
import MomentLocaleUtils from 'react-day-picker/moment';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getEventByYear } from 'services/event';
import { getTransObj } from 'utils';
import useStyles from './styles';
const DATE_FORMAT = 'hh:mm A - DD/MM/YYYY';

const EventSsection = props => {
  const { eventsData, classRoot, data, ...rest } = props;
  const history = useHistory();
  const classes = useStyles();
  const { t } = useTranslation();
  const [dateSelected, changeDateSelected] = useState(new Date());
  const [currentEvent, changeCurrentEvent] = useState({});
  const [year, setYear] = useState(new Date().getFullYear());
  const [events, setEvents] = useState([]);
  const lang = useSelector(state => state.multiLang.lang);

  const transformData = list => {
    const newList = list.map(obj => {
      const transArr = Lodash.get(obj, 'translations', []);
      const objTrans = getTransObj(transArr, lang);
      const { _id, ...res } = objTrans;
      return { ...obj, ...res };
    });

    return newList;
  };

  useEffect(() => {
    const listEvent = Lodash.get(data, 'data', []);
    const newList = transformData(listEvent);
    setEvents(newList);
  }, [data]);

  useEffect(() => {
    getEventByYear(year)
      .then(res => {
        const data = Lodash.get(res, 'data', []);
        const newList = transformData(data);
        setEvents(newList);
      })
      .catch(err => {})
      .finally(() => {});
  }, [year]);

  useEffect(() => {
    if (events.length) {
      const newList = transformData(events);
      setEvents(newList);
      setCurrentEvent(newList);
    }
  }, [lang]);

  useEffect(() => {
    // const eventData = Lodash.find(events, event =>
    //   compareDate(event.startDate, dateSelected)
    // );

    // changeCurrentEvent(eventData);
    setCurrentEvent();
  }, [dateSelected]);

  const setCurrentEvent = data => {
    let res = events;
    if (data?.length) {
      res = data;
    }
    const eventData = Lodash.find(res, event =>
      compareDate(event.startDate, dateSelected)
    );

    changeCurrentEvent(eventData);
  };
  const compareDate = (firstDate, secondDate) => {
    return moment(firstDate).isSame(secondDate, 'day');
  };

  const _renderDay = day => {
    const dateData = day.getDate();
    const dayEvent = Lodash.find(events, event =>
      compareDate(event.startDate, day)
    );
    const isMatchEvent = !Lodash.isEmpty(dayEvent);

    return (
      <div className={clsx('DayPicker-Day---box', isMatchEvent && 'has-event')}>
        <p className={classes.dayDate}>{dateData}</p>
      </div>
    );
  };

  const _renderTitle = title => {
    return (
      <Title size="large" className={classes.titleBox}>
        <div className={classes.titleContent}>
          <h2 className={classes.title}>{title}</h2>
          <Link to="/event" className={classes.readMore}>
            {t('viewMore')} <ChevronRight />
          </Link>
        </div>
      </Title>
    );
  };

  const _renderDayPicker = () => {
    return (
      <Box className={classes.eventRight}>
        <DayPicker
          locale={lang}
          localeUtils={MomentLocaleUtils}
          renderDay={_renderDay}
          onDayClick={day => changeDateSelected(day)}
          selectedDays={[dateSelected]}
          onMonthChange={date => {
            setYear(date.getFullYear());
          }}
          // onMonthChange={month => console.log('month', month.getFullYear())}
        />
      </Box>
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
                {currentEvent.translations[0].name}
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
                  {currentEvent.translations[0].address}
                </p>
              </Box>

              <Box display="flex" alignItems="center" flexDirection="row">
                <CardMedia
                  className={classes.media}
                  image="images/ic-clock-white.svg"
                  alt="location"
                />
                <p className={classes.addressItem}>
                  {moment(currentEvent.startDate).format(DATE_FORMAT)}
                </p>
              </Box>
            </Box>
          </Box>
        </CardActionArea>
      </Card>
    );
  };

  return (
    <section>
      <Container style={{ paddingBottom: 24 }}>
        {_renderTitle(t('titleEvent'))}

        {/* <Card className={clsx(classes.rootCard)} > */}
        <Grid container className={classes.rootCard}>
          <Grid item xs={12} md={6} className={classes.eventLeft}>
            {_renderEventDetail()}
          </Grid>

          <Grid item xs={12} md={6} className={clsx(classes.eventRight)}>
            {_renderDayPicker()}
          </Grid>
        </Grid>
        {/* </Card> */}
      </Container>
    </section>
  );
};

EventSsection.propTypes = {
  className: PropTypes.string,
  eventsData: PropTypes.object
};

export default EventSsection;
