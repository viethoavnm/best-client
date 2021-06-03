import { Box, CardActionArea, CardMedia, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Lodash from 'lodash';
import moment from 'moment';
import 'moment/locale/vi';
import React, { useEffect, useState } from 'react';
import DayPicker from 'react-day-picker';
import MomentLocaleUtils from 'react-day-picker/moment';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import { getEventByYear } from 'services/event';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { convertTranslations, getTransObj } from 'utils';
import './day-picker.css';
import useStyles from './style';

const DATE_FORMAT = 'hh:mm A - DD/MM/YYYY';
const AppEventPickers = props => {
  const { eventsData, classRoot, data, ...rest } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  const [dateSelected, changeDateSelected] = useState(new Date());
  const [year, setYear] = useState(new Date().getFullYear());
  const [events, setEvents] = useState([]);
  const lang = useSelector(state => state.multiLang.lang);
  const [dayEvents, setDayEvents] = useState([]);
  const [selectedItem, setSelectedItem] = useState(false);

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
        if (Array.isArray(newList)) {
          newList.forEach(item => {
            convertTranslations(item);
          });
        }

        // console.log('newList', newList);
        setEvents(newList);
      })
      .catch(err => {})
      .finally(() => {});
  }, [year]);

  useEffect(() => {
    if (events.length) {
      const newList = transformData(events);
      setEvents(newList);
      // setCurrentEvent();
    }
  }, [lang]);

  useEffect(() => {
    setCurrentEvent();
  }, [events, dateSelected]);

  const setCurrentEvent = () => {
    const listEvents = Lodash.filter(events, event =>
      compareDate(event.startDate, dateSelected)
    );
    setDayEvents(listEvents);
    setSelectedItem(0);
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
            props.changeYear && props.changeYear(date.getFullYear());
          }}
          // onMonthChange={month => console.log('month', month.getFullYear())}
        />
      </Box>
    );
  };

  const _renderEventDetail = () => {
    if (dayEvents.length === 0) {
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
      <Carousel
        className="carousel-customize"
        showStatus={false}
        selectedItem={selectedItem}
        onChange={setSelectedItem}>
        {dayEvents.map(eventItem => {
          return (
            <CardActionArea
              key={eventItem?._id}
              component={Link}
              to={`/event/${eventItem?.[lang]?.slug}`}>
              <Box>
                <Box position="relative" textAlign="center">
                  <CardMedia
                    className={classes.thumbnailEvent}
                    image={eventItem?.urlImg}
                    alt="image-event"
                  />
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    className={classes.wrapperDayEvent}>
                    <Typography className={classes.dayEvent}>
                      {moment(eventItem?.startDate).date()}
                    </Typography>
                    <Typography className={classes.weekday}>
                      {moment(eventItem?.startDate).format('dddd')}
                    </Typography>
                  </Box>
                </Box>

                <Box className={classes.eventDes}>
                  <Box
                    display="flex"
                    alignItems="center"
                    flexDirection="column">
                    <h2 className={classes.eventTitle} align="center">
                      {eventItem?.[lang]?.name}
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
                        {eventItem?.[lang]?.address}
                      </p>
                    </Box>

                    <Box display="flex" alignItems="center" flexDirection="row">
                      <CardMedia
                        className={classes.media}
                        image="images/ic-clock-white.svg"
                        alt="location"
                      />
                      <p className={classes.addressItem}>
                        {moment(eventItem.startDate).format(DATE_FORMAT)}
                      </p>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </CardActionArea>
          );
        })}
      </Carousel>
    );
  };

  return (
    <Grid container className={classes.rootCard}>
      <Grid item xs={12} md={6} className={classes.eventLeft}>
        {_renderEventDetail()}
      </Grid>

      <Grid item xs={12} md={6} className={clsx(classes.eventRight)}>
        {_renderDayPicker()}
      </Grid>
    </Grid>
  );
};

export default AppEventPickers;
