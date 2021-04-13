import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/CardMedia';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DayPicker from 'react-day-picker';
import MomentLocaleUtils from 'react-day-picker/moment';
import moment from 'moment';
import Lodash from 'lodash';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import { ChevronRight } from '@material-ui/icons';
import { Container, Title } from 'components';

// import './calendar.scss';
import './day-picker.css';
import 'moment/locale/vi';

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
const DATE_FORMAT = 'hh:mm A - DD/MM/YYYY';

const EventSsection = props => {
  const { eventsData, classRoot, ...rest } = props;

  const classes = useStyles();

  const [dateSelected, changeDateSelected] = useState(new Date());
  const [currentEvent, changeCurrentEvent] = useState();
  const [year, setYear] = useState(new Date().getFullYear());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
  }, [eventsData]);

  useEffect(() => {
    const eventData = Lodash.find(events, event =>
      compareDate(event.startDate, dateSelected)
    );

    changeCurrentEvent(eventData);
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

  const _renderTitle = title => {
    return (
      <Title size="large" className={classes.titleBox}>
        <div className={classes.titleContent}>
          <h2 className={classes.title}>{title}</h2>
          <Link to="/" className={classes.readMore}>
            Xem thêm <ChevronRight />
          </Link>
        </div>
      </Title>
    );
  };

  const _renderDayPicker = () => {
    return (
      <Box display="flex" justifyContent="center" height="400px" width="100%">
        <Box height="100%" width="100%" className={clsx(classes.mapContent)}>
          <div className={clsx(classes.googleMapFrame)}>
            <DayPicker
              locale="vi"
              localeUtils={MomentLocaleUtils}
              renderDay={_renderDay}
              onDayClick={day => changeDateSelected(day)}
              selectedDays={[dateSelected]}
              onMonthChange={month => console.log('month', month.getFullYear())}
            />
          </div>
        </Box>
      </Box>
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
          <Card className={clsx(classes.eventDetailCard)}>
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
          <Card className={clsx(classes.eventDetailCard)}>
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
                  {currentEvent.translations[0].name}
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
                    {currentEvent.translations[0].address}
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
    <section>
      <Container>
        {_renderTitle('Sự kiện sắp tới')}

        <Card className={clsx(classes.rootCard)} elevation={0}>
          <Grid container>
            <Grid item xs={12} sm={6} className={clsx(classes.eventLeft)}>
              {_renderEventDetail()}
            </Grid>
            <Grid item xs={12} sm={6} className={clsx(classes.eventRight)}>
              {_renderDayPicker()}
            </Grid>
          </Grid>
        </Card>
      </Container>
    </section>
  );
};

EventSsection.propTypes = {
  className: PropTypes.string,
  eventsData: PropTypes.object
};

export default EventSsection;
