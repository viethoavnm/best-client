/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import { CardMedia, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import clsx from 'clsx';

const FeaturedItem = props => {
  const { tag, title, imageUrl, className, ...rest } = props;
  console.log('FeaturedItem - props: ', props);

  const classes = useStyles();

  const CardOverlayContent = () => {
    return (
      <>
        {/* Tag */}
        <Button
          variant="contained"
          size="small"
          color="blue"
          className={classes.margin}>
          {tag}
        </Button>

        {/* Title */}
        <Typography color="inherit" variant="subtitle1">
          {title}
        </Typography>

        {/* Time */}
        <div className={classes.person}>
          <div></div>
        </div>
      </>
    );
  };

  return (
    <CardMedia {...rest} className={clsx(className)}>
      <img src={imageUrl || '/images/auth.png'} />
      <CardOverlayContent />
    </CardMedia>
  );
};

FeaturedItem.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string
};

export default FeaturedItem;
