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
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.16)'
    },
    content: {
      padding: '24px 32px'
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
      margin: 0,
      color: '#3A3A3A',
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 1.5,
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
      marginTop: 20,
      color: '#92BF1F'
    },
    textGrid: {
      marginLeft: 10,
      fontSize: 14,
      fontWeight: 500,
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
      <Grid container spacing={0}>
        <Grid item xs={5} md={4}>
          <CardMedia className={`${classes.media}`} image={image} />
        </Grid>

        <Grid item xs={7} md={8}>
          <CardContent className={classes.content}>
            <h4 className={classes.title}>{name}</h4>
            <Box className={classes.grid}>
              <LocationOnOutlinedIcon />
              <div className={classes.textGrid}>{address}</div>
            </Box>

            <Box className={classes.grid}>
              <AccessTimeIcon />
              <div className={classes.textGrid}>{formatDate}</div>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
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
