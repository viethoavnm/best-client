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
import DayPicker from 'react-day-picker';
import MomentLocaleUtils from 'react-day-picker/moment';
import Card from '@material-ui/core/CardMedia';
import CardMedia from '@material-ui/core/CardMedia';

import Box from '@material-ui/core/Box';

// import './calendar.scss';
import './day-picker.css';
import 'moment/locale/vi';

const DATE_FORMAT = 'hh:mm A - DD/MM/YYYY';

const mockEvent = [
  {
    name: 'Sự kiện chào mừng công nghệ sinh khối mới',
    content: 'Đột phát trong công nghệ phát triển sinh khối mới',
    address: 'Số 168 đông triều, thanh xuân, hà nội',
    startDate: '2021-04-30T13:48:00.000Z'
  },
  {
    name: 'Sự kiện chào mừng nông thôn mới 2021',
    content: 'Sự kiện nông thôn mới thường niên năm 2021',
    address: 'Số 68 triều khúc, thanh xuân, hà nội',
    startDate: '2021-04-24T10:00:00.000Z'
  }
];

const Event = () => {
  const classes = useStyles();
  const [eventList, setEventList] = useState([
    {
      title: `Hội thảo "Khí hóa sinh khối - Giải pháp bền vững và kinh tế"`,
      image: `images/new-2.png`,
      day: 10,
      month: 9,
      year: 2021,
      hourminute: `6h30 AM`,
      location: `Đường số 8, Thâm ngàn, Viêng Chăn, Lào`
    },
    {
      title: `Kinh doanh và Khởi nghiệp trong thời đại số`,
      image: `images/new-1.png`,
      day: 19,
      month: 6,
      year: 2021,
      hourminute: `14h30 AM`,
      location: `Trung tâm Hội nghị quốc gia, Hà Nội`
    },
    {
      title: `Tư duy Lãnh đạo trong Chuyển đổi số`,
      image: `images/thu-vien-2.png`,
      day: 12,
      month: 4,
      year: 2021,
      hourminute: `8h00 PM`,
      location: `458 Nguyễn Thị Minh Khai`
    },
    {
      title: `Lễ Vinh Danh Công ty Kinh Doanh Hiệu Quả Nhất Việt Nam`,
      image: `images/thu-vien-1.png`,
      day: 8,
      month: 3,
      year: 2021,
      hourminute: `12h00 AM`,
      location: `Đường số 8, Thâm ngàn, Viêng Chăn, Lào`
    }
  ]);

  const [dateSelected, changeDateSelected] = useState(new Date());
  const [currentEvent, changeCurrentEvent] = useState(mockEvent[0]);
  // eslint-disable-next-line no-unused-vars
  const [events, setEvents] = useState(mockEvent);

  useEffect(() => {
    const eventData = Lodash.find(events, event =>
      compareDate(event.startDate, dateSelected)
    );
    // if (!Lodash.isEmpty(eventData)) {
    changeCurrentEvent(eventData);
    // }
  }, [dateSelected]);

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
        locale="vi"
        localeUtils={MomentLocaleUtils}
        renderDay={_renderDay}
        onDayClick={day => changeDateSelected(day)}
        selectedDays={[dateSelected]}
      />
    );
  };

  const _renderEventDetail = () => {
    return (
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="stretch">
        {Lodash.isEmpty(currentEvent) ? (
          <Card className={clsx(classes.eventDetailCard)} elevation={0}>
            <img
              alt="img_no_event"
              className={classes.imgNoEvent}
              src="images/img_no_event.svg"
            />
            <Typography className={classes.noEventLable} align="center">
              Hiện đang không có sự kiện nào
            </Typography>
          </Card>
        ) : (
          <Card className={clsx(classes.eventDetailCard)} elevation={0}>
            <Box position="relative" textAlign="center">
              <CardMedia
                className={classes.thumbnailEvent}
                image="images/new-1.png"
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

  return (
    <Fragment>
      <Container>
        <section>
          <Title size="large">
            <div className={classes.title}>Sự kiện</div>
            <div className={classes.breadcrumb}>
              Trang chủ / Sự Kiện Sắp Tới
            </div>
          </Title>

          <Card className={clsx(classes.eventCard)} elevation={0}>
            <Grid container>
              <Grid item xs={12} sm={6} className={clsx(classes.eventLeft)}>
                {_renderEventDetail()}
              </Grid>
              <Grid item xs={12} sm={6} className={clsx(classes.eventRight)}>
                {_renderDayPicker()}
              </Grid>
            </Grid>
          </Card>
        </section>

        <section className={clsx(classes.secondSection)}>
          <Grid container>
            <Grid item xs={12} md={8}>
              <Title size="large">
                <div className={classes.title}>Sự kiện sắp diễn ra</div>
              </Title>
              <Grid container spacing={2} className={classes.eventList}>
                {eventList.map(item => {
                  return (
                    <Grid item xs={12} sm={12} lg={12}>
                      <EventCardLarge
                        title={item.title}
                        image={item.image}
                        day={item.day}
                        month={item.month}
                        year={item.year}
                        hourminute={item.hourminute}
                        location={item.location}
                      />
                      <Divider className={classes.divider} />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item xs={12} md={4} className={classes.rightSidebar}>
              <NewsEvent />
            </Grid>
          </Grid>
        </section>
      </Container>
    </Fragment>
  );
};

export default Event;
