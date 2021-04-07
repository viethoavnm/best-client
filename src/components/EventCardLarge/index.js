import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import moment from 'moment';
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
      //padding: 0
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
      marginBottom: 10,
      color: '#92BF1F',
      overflow: 'hidden'
    },
    iconGrid: {
      marginRight: 10
    },
    textGrid: {
      display: 'inline-block',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
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

const EventCardLarge = ({ date, title, location }) => {
  const classes = useStyles();
  const theme = useTheme();
  const dateTime = new Date(date);
  return (
    <Card className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/images/tin-moi-nhat-1.png"
              title="Live from space album cover"
            />
          </CardActionArea>
        </Grid>
        <Grid item xs={6} md={8}>
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
                  <LocationOnOutlinedIcon />
                </Grid>
                <Grid item>
                  <Typography variant="span" className={classes.textGrid}>
                    {location}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                alignItems="center"
                className={classes.grid}>
                <Grid item className={classes.iconGrid}>
                  <AccessTimeIcon />
                </Grid>
                <Grid item>
                  <Typography variant="span" className={classes.textGrid}>
                    {moment(dateTime).format('HH:mm DD/MM/YYYY')}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <div className={classes.controls}></div>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
};

export default EventCardLarge;
