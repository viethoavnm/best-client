import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid
} from '@material-ui/core';
import { AccessTime } from '@material-ui/icons';
import React from 'react';
import useStyles from './styles';

const NewsItem = ({ image, type, title, time }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CardActionArea>
            <CardMedia image={image} title={title} className={classes.img} />
          </CardActionArea>
        </Grid>
        <Grid item xs={12} md={6} className={classes.contentBox}>
          <CardContent className={classes.content}>
            <div className={classes.type}>
              {type}
              <span className={classes.time}>
                {' - '}
                {time}
              </span>
            </div>
            <h2 className={classes.title}>{title}</h2>
            <span className={[classes.time, classes.hiddenTime].join(' ')}>
              <AccessTime className={classes.icon} />
              {time}
            </span>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default NewsItem;
