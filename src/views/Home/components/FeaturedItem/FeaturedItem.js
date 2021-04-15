import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';
import { AccessTime } from '@material-ui/icons';
import clsx from 'clsx';
import React from 'react';
import useStyles from './styles';

const FeaturedItem = ({
  image,
  type,
  title,
  time,
  classRoot,
  classImg,
  classContent,
  classType,
  classTitle,
  classTime,
  handleClick
}) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, classRoot && classRoot)} elevation={0}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          image={image}
          title={title}
          className={clsx(classes.img, classImg && classImg)}
        />

        <CardContent
          className={clsx(classes.content, classContent && classContent)}>
          <Typography
            component="span"
            className={clsx(classes.type, classType && classType)}>
            {type}
          </Typography>
          <Typography
            component="h2"
            className={clsx(classes.title, classTitle && classTitle)}>
            {title}
          </Typography>
          <Typography
            component="p"
            className={clsx(classes.time, classTime && classTime)}>
            <AccessTime className={classes.icon} />
            {time}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default FeaturedItem;
