import { Button, CardMedia } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  marker: {
    width: 22,
    height: 29
  }
}));

const MarkerMap = () => {
  const classes = useStyles();

  return (
    <Button>
      <CardMedia
        className={classes.marker}
        image="images/icMarkerMap.svg"
        alt="slash"
      />
    </Button>
  );
};

export default MarkerMap;
