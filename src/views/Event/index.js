import { Card, CardActionArea, CardMedia, Divider } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { Container, Title } from 'components';
import AppEventPickers from 'components/AppEventPickers';
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

          {/* <Grid container className={classes.rootCard}>
            <Grid item xs={12} md={6} className={clsx(classes.eventLeft)}>
              {_renderEventDetail()}
            </Grid>

            <Grid item xs={12} md={6} className={clsx(classes.eventRight)}>
              {_renderDayPicker()}
            </Grid>
          </Grid> */}

          <AppEventPickers changeYear={year => setYear(year)} />
        </section>

        <section className={clsx(classes.secondSection)}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Title size="large" style={{ marginBottom: 24 }}>
                <div className={classes.title}>{t('eventIn') + year}</div>
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
