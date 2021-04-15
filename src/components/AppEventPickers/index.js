import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DayPicker from 'react-day-picker';
import MomentLocaleUtils from 'react-day-picker/moment';
import moment from 'moment';
import Lodash from 'lodash';
import useStyles from './style';
import { useSelector } from 'reac-redux';

// import './calendar.scss';
import './day-picker.css';
import 'moment/locale/vi';

const mockEvent = [
  {
    name: 'Sự kiện chào mừng công nghệ sinh khối mới',
    content: 'Đột phát trong công nghệ phát triển sinh khối mới',
    address: 'Số 168 đông triều, thanh xuân, hà nội',
    startDate: '2021-03-30T13:48:00.000Z'
  },
  {
    name: 'Sự kiện chào mừng nông thôn mới 2021',
    content: 'Sự kiện nông thôn mới thường niên năm 2021',
    address: 'Số 68 triều khúc, thanh xuân, hà nội',
    startDate: '2021-03-24T10:00:00.000Z'
  }
];

const DATE_FORMAT = 'hh:mm A - DD/MM/YYYY';
const AppEventPickers = props => {
  const classes = useStyles(props);
  const lang = useSelector(state => state.multiLang.lang);
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
        alignItems="center"
        display="flex"
        flexDirection="column"
        height="50px"
        justifyContent="center"
        position="relative"
        width="50px"
        // bgcolor={isSelectedDate ? '#92BF1F' : 'transaprent'}
      >
        <Typography className={classes.dayDate}>{dateData}</Typography>

        {isMatchEvent && (
          <Box
            alignSelf="center"
            bgcolor="#92BF1F"
            borderRadius="4px"
            bottom="0px"
            height="8px"
            left="21px"
            position="absolute"
            width="8px"
          />
        )}
      </Box>
    );
  };

  return (
    <Grid
      alignItems="center"
      container
      direction="row"
      justify="space-between"
      {...props}>
      <Grid item sm={6} xs={12}>
        <Grid
          alignItems="stretch"
          container
          direction="column"
          justify="space-between">
          {Lodash.isEmpty(currentEvent) ? (
            <Box alignItems="center" display="flex" justifyContent="center">
              <Typography className={classes.noEvent} color="red">
                Không có sự kiện nào!
              </Typography>
            </Box>
          ) : (
            <>
              <Grid item sm={12} xs={12}>
                <Box position="relative" textAlign="center">
                  <CardMedia
                    alt="image-event"
                    className={classes.thumbnailEvent}
                    image="images/new-1.png"
                  />

                  <Box
                    className={classes.wrapperDayEvent}
                    left="50%"
                    position="absolute"
                    top="50%">
                    <Typography className={classes.dayEvent}>
                      {moment(currentEvent.startDate).date()}
                    </Typography>
                    <Typography className={classes.weekday}>
                      {moment(currentEvent.startDate).format('dddd')}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item sm={12} xs={12}>
                <Box className={classes.eventDes}>
                  <Box
                    alignItems="center"
                    display="flex"
                    flexDirection="column">
                    <Typography align="center" className={classes.title}>
                      {currentEvent.name}
                    </Typography>

                    <Box
                      alignItems="center"
                      display="flex"
                      flexDirection="row"
                      marginBottom="16px">
                      <CardMedia
                        alt="location"
                        className={classes.media}
                        image="images/ic-location-white.svg"
                      />
                      <Typography className={classes.addressItem}>
                        {currentEvent.address}
                      </Typography>
                    </Box>

                    <Box alignItems="center" display="flex" flexDirection="row">
                      <CardMedia
                        alt="location"
                        className={classes.media}
                        image="assets/images/ic-clock-white.svg"
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
      </Grid>

      <Grid item sm={6} xs={12}>
        <DayPicker
          locale={lang}
          localeUtils={MomentLocaleUtils}
          onDayClick={day => changeDateSelected(day)}
          renderDay={_renderDay}
          selectedDays={[dateSelected]}
        />
      </Grid>
    </Grid>
  );
};

AppEventPickers.propTypes = {
  listEvent: PropTypes.array
};

AppEventPickers.defaultProps = {};

export default React.memo(AppEventPickers);
