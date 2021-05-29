import { Box, Card, CardActionArea, CardMedia, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { ChevronRight } from '@material-ui/icons';
import clsx from 'clsx';
import { Container, Title } from 'components';
import AppEventPickers from 'components/AppEventPickers';
import Lodash from 'lodash';
import moment from 'moment';
import 'moment/locale/vi';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import DayPicker from 'react-day-picker';
import MomentLocaleUtils from 'react-day-picker/moment';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getEventByYear } from 'services/event';
import { convertTranslations, getTransObj } from 'utils';
import useStyles from './styles';
const DATE_FORMAT = 'hh:mm A - DD/MM/YYYY';

const EventSsection = props => {
  const { eventsData, classRoot, data, ...rest } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  const [dateSelected, changeDateSelected] = useState(new Date());
  const [currentEvent, changeCurrentEvent] = useState({});
  const [year, setYear] = useState(new Date().getFullYear());
  const [events, setEvents] = useState([]);
  const lang = useSelector(state => state.multiLang.lang);

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

  return (
    <section>
      <Container style={{ paddingBottom: 24 }}>
        {_renderTitle(t('titleEvent'))}

        {/* <Card className={clsx(classes.rootCard)} > */}
        {/* <Grid container className={classes.rootCard}>
          <Grid item xs={12} md={6} className={classes.eventLeft}>
            {_renderEventDetail()}
          </Grid>

          <Grid item xs={12} md={6} className={clsx(classes.eventRight)}>
            {_renderDayPicker()}
          </Grid>
        </Grid> */}

        <AppEventPickers />
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
