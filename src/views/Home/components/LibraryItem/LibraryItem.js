/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import { Typography, colors } from '@material-ui/core';
import useStyles from './styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import { Label } from 'components';

const FeaturedItem = props => {
  const { tag, title, imageUrl, time, ...rest } = props;
  console.log('FeaturedItem - props: ', props);

  const classes = useStyles();

  return (
    <Paper
      {...rest}
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: `url(${imageUrl})` }}>
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: 'none', height: '100%' }}
          src={imageUrl}
          alt={tag}
        />
      }

      <div className={classes.overlay} />

      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            {tag && (
              <Label className={classes.unread} color={colors.orange[500]}>
                {tag}
              </Label>
            )}

            <Typography
              className={classes.title}
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom>
              {title}
            </Typography>

            {time && (
              <Box display="flex" flexDirection="row" alignItems="center">
                <img
                  src="images/ic-clock-white.svg"
                  alt="clock"
                  style={{ marginRight: 5 }}
                />
                <Typography className={classes.time}>{time}</Typography>
              </Box>
            )}
          </div>
        </Grid>
      </Grid>
    </Paper>
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
