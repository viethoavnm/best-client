import { Box, Card, CardActionArea, CardMedia, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { ChevronRight } from '@material-ui/icons';
import clsx from 'clsx';
import { Container, Title } from 'components';
import Lodash from 'lodash';
import moment from 'moment';
import 'moment/locale/vi';
import PropTypes from 'prop-types';
import React, { useEffect, useState, useCallback } from 'react';
import DayPicker from 'react-day-picker';
import MomentLocaleUtils from 'react-day-picker/moment';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getEventByYear } from 'services/event';
import { convertTranslations, getTransObj } from 'utils';
import useStyles from './style';
const DATE_FORMAT = 'hh:mm A - DD/MM/YYYY';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Button from '@material-ui/core/Button';
import { useHistory, useParams } from 'react-router-dom';

var sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const AppEventPickers = props => {
  const { eventsData, classRoot, data, ...rest } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  const history = useHistory();
  const [dateSelected, changeDateSelected] = useState(new Date());
  const [currentEvent, changeCurrentEvent] = useState({});
  const [year, setYear] = useState(new Date().getFullYear());
  const [events, setEvents] = useState([]);
  const lang = useSelector(state => state.multiLang.lang);
  const [dayEvents, setDayEvents] = useState([]);
  const [dragging, setDragging] = useState(false);

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
    // let res = events;
    // if (data?.length) {
    //   res = data;
    // }
    const listEvents = Lodash.filter(events, event =>
      compareDate(event.startDate, dateSelected)
    );

    setDayEvents(listEvents);
    // console.log('listEvents', listEvents);

    // changeCurrentEvent(eventData);
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

  // Handle change slide
  const handleBeforeChange = useCallback(() => {
    setDragging(true);
  }, [setDragging]);

  const handleAfterChange = useCallback(() => {
    setDragging(false);
  }, [setDragging]);

  const handleOnItemClick = useCallback(
    eventItem => {
      if (dragging) return;

      history.push({ pathname: `/event/${eventItem?.[lang]?.slug}` });
    },
    [dragging]
  );

  const _renderEventItem = eventItem => {
    return (
      <Card elevation={0}>
        {/* <CardActionArea
          component={Link}
          to={`/event/${eventItem?.[lang]?.slug}`}> */}
        <Box onClick={() => handleOnItemClick(eventItem)}>
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
            <Box display="flex" alignItems="center" flexDirection="column">
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
        {/* </CardActionArea> */}
      </Card>
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
      <Slider
        {...sliderSettings}
        beforeChange={handleBeforeChange}
        afterChange={handleAfterChange}>
        {dayEvents.map((eventItem, key) => {
          return <Box key={key}>{_renderEventItem(eventItem)}</Box>;
        })}
      </Slider>
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
