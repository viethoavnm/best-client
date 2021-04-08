import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DayPicker from 'react-day-picker';
import MomentLocaleUtils from 'react-day-picker/moment';
import moment from 'moment';
import Lodash from 'lodash';
import useStyles from './styles';

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
  const { className, ...rest } = props;

  const classes = useStyles();

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

  const _renderTitle = title => {
    return (
      <div>
        <Hidden smDown>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            marginBottom="30px"
            marginTop="40px"
            bgcolor="#F6F6F6">
            <img
              className={clsx(classes.slashIcon)}
              src="images/ic-slash-title.svg"
              alt="slash"
            />
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              className={classes.smTitle}>
              {title.toUpperCase()}
            </Typography>
          </Box>
        </Hidden>

        <Hidden lgUp>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              className={classes.lgTitle}>
              {title.toUpperCase()}
            </Typography>
          </Box>
        </Hidden>
      </div>
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
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography color="red" className={classes.noEvent}>
              Không có sự kiện nào!
            </Typography>
          </Box>
        ) : (
          <>
            <Grid item xs={12} sm={12}>
              <Box position="relative" textAlign="center">
                <CardMedia
                  className={classes.thumbnailEvent}
                  image="assets/images/new-1.png"
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
            </Grid>

            <Grid item xs={12} sm={12}>
              <Box className={classes.eventDes}>
                <Box display="flex" alignItems="center" flexDirection="column">
                  <Typography className={classes.title} align="center">
                    {currentEvent.name}
                  </Typography>

                  <Box
                    display="flex"
                    alignItems="center"
                    flexDirection="row"
                    marginBottom="16px">
                    <CardMedia
                      className={classes.media}
                      image="assets/images/ic-location-white.svg"
                      alt="location"
                    />
                    <Typography className={classes.addressItem}>
                      {currentEvent.address}
                    </Typography>
                  </Box>

                  <Box display="flex" alignItems="center" flexDirection="row">
                    <CardMedia
                      className={classes.media}
                      image="assets/images/ic-clock-white.svg"
                      alt="location"
                    />
                    <Typography className={classes.addressItem}>
                      {moment(currentEvent.startDate).format(DATE_FORMAT)}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </>
        )}
      </Grid>
    );
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      {_renderTitle('Sự kiện sắp tới')}

      <Hidden smDown>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            {_renderEventDetail()}
          </Grid>

          <Grid item xs={12} sm={6}>
            {_renderDayPicker()}
          </Grid>
        </Grid>
      </Hidden>

      <Hidden lgUp>
        <Grid container spacing={4} justify="center">
          {_renderEventDetail()}
          {_renderDayPicker()}
        </Grid>
      </Hidden>
    </div>
  );
};

EventSsection.propTypes = {
  className: PropTypes.string
};

export default EventSsection;
