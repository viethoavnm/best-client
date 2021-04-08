import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingBottom: '60%'
  },
  
  content: {
    padding: '10px 15px',
    minHeight: 143,
    [theme.breakpoints.only('xs')]: {
      minHeight: 'auto !important',
    }
  },
  height: {
    minHeight: 183
  },
  title: {
    color: '#3A3A3A',
    fontWeight: 700,
    fontSize: 20,
    lineHeight: '25px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
  },
  time: {
    color: '#929292',
    fontSize: 13,
    lineHeight: '20px',
    overflow: 'hidden'
  },
  wall: {
    height: 20,
    border: 'solid 1px #C4C4C4',
    margin: '0 5px'
  },
  description: {
    color: '#929292',
    fontSize: 13,
    lineHeight: '20px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
  }
}));

const LibraryCard = ({ image, title, author, date, description }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={title} />
      </CardActionArea>
      <CardContent
        className={
          description
            ? [classes.height, classes.content].join(' ')
            : classes.content
        }>
        <Typography gutterBottom component="h2" className={classes.title}>
          {title}
        </Typography>
        <Typography component="p" className={classes.time}>
          {author} <span className={classes.wall}></span> {date}
        </Typography>
        <Typography component="p" className={classes.description}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

LibraryCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string
};

export default LibraryCard;
