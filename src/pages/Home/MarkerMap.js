import { Button, CardMedia } from '@material-ui/core';
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  marker: {
    width: 22,
    height: 29
  }
}));

const MarkerMap = ({ text }) => {
  const classes = useStyles();

  return (
    <Button>
      <CardMedia
        className={classes.marker}
        image="assets/images/icMarkerMap.svg"
        alt="slash"
      />
    </Button>
  );
};

export default MarkerMap;
