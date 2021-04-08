import React from 'react';
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
      paddingTop: '77%',
      borderRadius: 10
    },
    title: {
      marginTop: 24,
      marginBottom: 42,
      color: '#3A3A3A',
      fontWeight: 500,
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
      paddingLeft: 32
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
    },
    datetime: {
      width: '50%',
      borderRadius: 10,
      backgroundColor: '#92BF1F',
      position: 'absolute',
      bottom: -16,
      right: -16
    },
    datetimeContainer: {
      position: 'relative',
      paddingBottom: '100%',
      height: 0
    },
    datetimeBlock: {
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      position: 'absolute',
      width: '100%',
      height: '100%'
    },
    month: {
      color: '#ffffff',
      [theme.breakpoints.down('sm')]: {
        fontSize: 12
      },
      [theme.breakpoints.between('sm', 'md')]: {
        fontSize: 18
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: 22
      },
      fontWeight: 500,
      whiteSpace: 'nowrap'
    },
    day: {
      color: '#ffffff',
      [theme.breakpoints.down('sm')]: {
        fontSize: 33,
        marginTop: 2
      },
      [theme.breakpoints.between('sm', 'md')]: {
        fontSize: 60,
        marginTop: 27
      },
      [theme.breakpoints.up('md')]: {
        fontSize: 60,
        marginTop: 20
      },
      fontWeight: 'bold',
      fontSize: 60
    }
  })
);

const EventCardLarge = ({
  day,
  month,
  year,
  hourminute,
  title,
  image,
  location
}) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Card className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={5} md={4} className={classes.mediaGrid}>
          <CardActionArea>
            <CardMedia
              className={`${classes.media}`}
              image={image}
              title={title}
            />
            <div className={classes.datetime}>
              <div className={classes.datetimeContainer}>
                <CardContent className={classes.datetimeBlock}>
                  <Typography component="div">
                    <Typography component="div" className={classes.month}>
                      Tháng {month}
                    </Typography>
                    <Typography component="div" className={classes.day}>
                      {day}
                    </Typography>
                  </Typography>
                </CardContent>
              </div>
            </div>
          </CardActionArea>
        </Grid>
        <Grid item xs={7} md={8} className={classes.detailGrid}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography
                variant="h3"
                color="textPrimary"
                className={classes.title}>
                {title}
              </Typography>
              <Box className={classes.grid}>
                <Box className={classes.iconGrid}>
                  <LocationOnOutlinedIcon />
                </Box>
                <Typography variant="div" className={classes.textGrid}>
                  {location}
                </Typography>
              </Box>
              <Box className={classes.grid}>
                <Box className={classes.iconGrid}>
                  <AccessTimeIcon />
                </Box>
                <Typography variant="div" className={classes.textGrid}>
                  {hourminute} - {day}/{month}/{year}
                </Typography>
              </Box>
            </CardContent>
            <div className={classes.controls}></div>
          </div>
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
