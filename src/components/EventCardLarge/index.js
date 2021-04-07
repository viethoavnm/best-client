/* eslint-disable react/prop-types */
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

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      overflow: 'visible',
      marginBottom: 25
    },
    details: {
      flexDirection: 'column'
    },
    content: {
      padding: 15
    },
    mediaBlock: {
      position: 'relative'
    },
    media: {
      height: 0,
      paddingTop: '77%'
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 10,
      paddingBottom: 10
    },
    playIcon: {
      height: 38,
      width: 38
    },
    title: {
      marginBottom: 20,
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
      marginBottom: 10,
      color: '#92BF1F'
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
    dateBlock: {
      [theme.breakpoints.down('md')]: {
        width: 80,
        height: 80
      },
      width: 120,
      height: 120,
      borderRadius: 10,
      backgroundColor: '#92BF1F',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      position: 'absolute',
      bottom: -15,
      right: -12
    },
    month: {
      color: '#ffffff',
      fontSize: 22,
      [theme.breakpoints.down('md')]: {
        fontSize: 17
      },
      fontWeight: 500,
      whiteSpace: 'nowrap'
    },
    day: {
      color: '#ffffff',
      [theme.breakpoints.down('md')]: {
        fontSize: 33,
        marginTop: 10
      },
      fontWeight: 'bold',
      fontSize: 60,
      marginTop: 27
    }
  })
);

const EventCardLarge = ({ day, month, year, hourminute, title, location }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Card className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={5} md={4}>
          <CardActionArea className={classes.mediaBlock}>
            <CardMedia
              className={`${classes.media} MuiPaper-rounded`}
              image="/images/tin-moi-nhat-1.png"
              title="Live from space album cover"
            />
            <CardContent className={classes.dateBlock}>
              <Typography component="div">
                <Typography component="div" className={classes.month}>
                  Tháng {month}
                </Typography>
                <Typography component="div" className={classes.day}>
                  {day}
                </Typography>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Grid>
        <Grid item xs={7} md={8}>
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

export default EventCardLarge;
/* eslint-enable react/prop-types */
