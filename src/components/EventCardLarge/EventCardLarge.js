import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
  Card,
  Grid,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Box
} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { VI_LANG } from 'utils/constant';
import moment from 'moment';
import Lodash from 'lodash';
import { formatDateLang } from 'utils';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      overflow: 'visible',
      borderRadius: 10,
      boxShadow: '0px 4px 60px rgba(150, 150, 150, 0.13)'
    },
    details: {
      flexDirection: 'column'
    },
    content: {
      padding: 15
    },
    media: {
      height: 0,
      [theme.breakpoints.down('sm')]: {
        paddingTop: '100%'
      },
      [theme.breakpoints.up('sm')]: {
        paddingTop: '77%'
      },
      borderRadius: 10
      // 'object-fit': 'contain'
    },
    title: {
      marginTop: 24,
      marginBottom: 42,
      color: '#3A3A3A',
      fontWeight: 600,
      lineHeight: '30px',
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-line-clamp': 2,
      '-webkit-box-orient': 'vertical',
      textOverflow: 'ellipsis'
    },
    grid: {
      display: 'flex',
      alignItems: 'center',
      justifyItems: 'center',
      marginBottom: 23,
      color: '#92BF1F'
    },
    mediaGrid: {
      display: 'flex',
      alignItems: 'center'
    },
    detailGrid: {
      paddingLeft: 20,
      [theme.breakpoints.up('sm')]: {
        paddingTop: 12
      }
    },
    iconGrid: {
      marginRight: 10,
      marginTop: 5,
      flexShrink: 0
    },
    textGrid: {
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-line-clamp': 2,
      '-webkit-box-orient': 'vertical',
      textOverflow: 'ellipsis'
    }
  })
);

const DATE_FORMAT = 'hh:mm A - DD/MM/YYYY';
const EventCardLarge = ({ item, onClick }) => {
  const { t } = useTranslation();
  const [lang, setLang] = useState(VI_LANG);
  const classes = useStyles();
  const theme = useTheme();

  const image = Lodash.get(item, 'urlImg', '');
  const name = Lodash.get(item, 'name', '');
  const address = Lodash.get(item, 'address', '');
  const startDate = Lodash.get(item, 'startDate', '');
  const date = new Date(startDate);
  const formatDate = moment(date).format(DATE_FORMAT);
  const month = moment(date).month() + 1; // Moment base month on 0
  const day = moment(date).date();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={onClick}>
        <Grid container spacing={0}>
          <Grid item xs={5} md={4} className={classes.mediaGrid}>
            <CardActionArea>
              <CardMedia className={`${classes.media}`} image={image} />
            </CardActionArea>
          </Grid>

          <Grid item xs={7} md={8} className={classes.detailGrid}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography
                  variant="h4"
                  color="textPrimary"
                  className={classes.title}>
                  {name}
                </Typography>

                <Box className={classes.grid}>
                  <Box className={classes.iconGrid}>
                    <LocationOnOutlinedIcon />
                  </Box>
                  <Typography variant="div" className={classes.textGrid}>
                    {address}
                  </Typography>
                </Box>

                <Box className={classes.grid}>
                  <Box className={classes.iconGrid}>
                    <AccessTimeIcon />
                  </Box>
                  <Typography variant="div" className={classes.textGrid}>
                    {formatDate}
                  </Typography>
                </Box>
              </CardContent>
              <div className={classes.controls}></div>
            </div>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};

EventCardLarge.propTypes = {
  title: PropTypes.string,
  day: PropTypes.number,
  month: PropTypes.number,
  year: PropTypes.number,
  hourminute: PropTypes.string,
  image: PropTypes.string,
  location: PropTypes.string
};

export default EventCardLarge;
