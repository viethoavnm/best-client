import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import FeaturedItem from '../FeaturedItem';

const useStyles = makeStyles(theme => ({
  root: {},
  files: {
    marginTop: theme.spacing(3)
  }
}));

const FeaturedSection = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid className={classes.files} container spacing={3}>
        <FeaturedItem
          tag="Bản tin"
          title="ĐBSCL vượt qua khủng hoảng kép như thế nào?"
          imageUrl="images/latest-new-1.png"
        />
      </Grid>
      <Grid className={classes.files} container spacing={3}>
        <FeaturedItem
          tag="Bản tin"
          title="ĐBSCL vượt qua khủng hoảng kép như thế nào?"
          imageUrl="images/latest-new-1.png"
        />
      </Grid>
    </div>
  );
};

FeaturedSection.propTypes = {
  className: PropTypes.string
};

export default FeaturedSection;
