import React, { useEffect, useState } from 'react';
import { Divider, Grid } from '@material-ui/core';
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
      <Box
        display="flex"
        flexDirection="column"
        width="50px"
        height="50px"
        justifyContent="center"
        alignItems="center"
        position="relative"
        // bgcolor={isSelectedDate ? '#92BF1F' : 'transaprent'}
      >
        <Typography className={classes.dayDate}>{dateData}</Typography>

        {isMatchEvent && (
          <Box
            width="8px"
            position="absolute"
            left="21px"
            bottom="0px"
            height="8px"
            borderRadius="4px"
            bgcolor="#92BF1F"
            alignSelf="center"
          />
        )}
      </Box>
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
    const image = Lodash.get(currentEvent, 'urlImg', '');
    const name = Lodash.get(currentEvent, 'name', '');
    const address = Lodash.get(currentEvent, 'address', '');
    const startDate = Lodash.get(currentEvent, 'startDate', '');

    return (
      <Grid
        item
        container
        // direction="column"
        justifyContent="center"
        justify="center"
        alignItems="center">
        {Lodash.isEmpty(currentEvent) ? (
          // <Card className={classes.eventDetailCard} elevation={0}>
          //   <CardMedia
          //     alt="img_no_event"
          //     className={classes.imgNoEvent}
          //     image="images/img_no_event.svg"
          //   />

          //   <Typography className={classes.noEventLable} align="center">
          //     Hiện đang không có sự kiện nào
          //   </Typography>
          // </Card>
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
        ) : (
          // <Box>
          //   <CardMedia
          //     alt="img_no_event"
          //     className={classes.imgNoEvent}
          //     image="images/img_no_event.svg"
          //   />

          //   <Typography className={classes.noEventLable} align="center">
          //     Hiện đang không có sự kiện nào
          //   </Typography>
          // </Box>
          <Card className={clsx(classes.eventDetailCard)} elevation={0}>
            <Box position="relative" textAlign="center">
              <CardMedia
                className={classes.thumbnailEvent}
                image={image}
                alt="image-event"
              />

              <Box
                position="absolute"
                top="50%"
                left="50%"
                className={classes.wrapperDayEvent}>
                <Typography className={classes.dayEvent}>
                  {moment(currentEvent.startDate).date()}
                </Typography>
                <Typography className={classes.weekday}>
                  {moment(currentEvent.startDate).format('dddd')}
                </Typography>
              </Box>
            </Box>

            <Box className={classes.eventDes}>
              <Box display="flex" alignItems="center" flexDirection="column">
                <Typography className={classes.eventTitle} align="center">
                  {currentEvent.name}
                </Typography>

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
                  <Typography className={classes.addressItem}>
                    {currentEvent.address}
                  </Typography>
                </Box>

                <Box display="flex" alignItems="center" flexDirection="row">
                  <CardMedia
                    className={classes.media}
                    image="images/ic-clock-white.svg"
                    alt="location"
                  />
                  <Typography className={classes.addressItem}>
                    {moment(currentEvent.startDate).format(DATE_FORMAT)}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Card>
        )}
      </Grid>
    );
  };

  const handleClickItem = item => {
    history.push({
      pathname: `/event/${item._id}`
    });
  };
  return (
    <Fragment>
      {/* {renderHTML(htmlUnescape)} */}
      <Container>
        <Box marginTop="48px" />

        {/* <Button onClick={() => dispatch(fetchMenuWeb())}>sadsds</Button> */}
        <section>
          <Title size="large">
            <div className={classes.title}>{t('eventsTitle')}</div>
            <div className={classes.breadcrumb}>
              {t('txtHome')} / {t('titleEvent')}
            </div>
          </Title>

          <Card className={clsx(classes.eventCard)} elevation={0}>
            <Grid container>
              <Grid
                item
                container
                sm={12}
                md={6}
                xs={12}
                className={clsx(classes.eventLeft)}>
                {_renderEventDetail()}
              </Grid>

              <Grid
                item
                container
                sm={12}
                md={6}
                xs={12}
                justify="center"
                className={clsx(classes.eventRight)}>
                {_renderDayPicker()}
              </Grid>
            </Grid>
          </Card>
        </section>

        <section className={clsx(classes.secondSection)}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Title size="large">
                <div className={classes.title}>{t('upcomingEvents')}</div>
              </Title>

              {!loading ? (
                <Grid container spacing={2} className={classes.eventList}>
                  {listEvent.map(item => {
                    return (
                      <Grid item xs={12} sm={12} lg={12}>
                        {/* <ListItem onClick={() => handleClickItem(item)}> */}
                        <EventCardLarge
                          item={item}
                          onClick={() => handleClickItem(item)}
                          // title={item.title}
                          // image={item.image}
                          // startTime={item.startTime}
                          // day={item.day}
                          // month={item.month}
                          // year={item.year}
                          // hourminute={item.hourminute}
                          // location={item.location}
                        />
                        <Divider className={classes.divider} />
                        {/* </ListItem> */}
                      </Grid>
                    );
                  })}
                </Grid>
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
