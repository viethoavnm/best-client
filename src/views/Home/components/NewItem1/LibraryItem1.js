/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import clsx from 'clsx';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box
} from '@material-ui/core';

const FeaturedItem = props => {
  const { title, imageUrl, time, className, ...rest } = props;
  console.log('FeaturedItem - props: ', props);

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardMedia className={classes.media} image={imageUrl} />

      <CardContent className={classes.content}>
        <Box display="flex" flexDirection="row">
          <Typography
            display="block"
            variant="h6"
            className={clsx(classes.time)}>
            {`${time} - `}
          </Typography>

          <Typography
            display="block"
            variant="h6"
            className={clsx(classes.title)}>
            {`${title}`}
          </Typography>
        </Box>
      </CardContent>
    </Card>
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
