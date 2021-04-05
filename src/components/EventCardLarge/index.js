import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex'
    },
    details: {
      display: 'flex',
      flexDirection: 'column'
    },
    content: {
      flex: '1 0 auto'
    },
    cover: {
      width: 151
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
      marginBottom: 20
    },
    grid: {
      marginBottom: 10
    },
    iconGrid: {
      marginRight: 10
    }
  })
);

const EventCardLarge = ({ day, month, title, location }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="/images/tin-moi-nhat-1.png"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography
            variant="h3"
            color="textPrimary"
            className={classes.title}>
            {title}
          </Typography>
          <Grid
            container
            direction="row"
            alignItems="center"
            className={classes.grid}>
            <Grid item className={classes.iconGrid}>
              <LocationOnIcon />
            </Grid>
            <Grid item>
              <Typography variant="span" color="textPrimary">
                {' '}
                {day}
                {month}
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" alignItems="center">
            <Grid item className={classes.iconGrid}>
              <AccessTimeIcon />
            </Grid>
            <Grid item>
              <Typography variant="span" color="textPrimary">
                {location}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <div className={classes.controls}></div>
      </div>
    </Card>
  );
};

export default EventCardLarge;
