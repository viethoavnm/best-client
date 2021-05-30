import { Button, CardMedia } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  marker: {
    width: 22,
    height: 29
  }
}));

const MarkerMap = ({ onClick }) => {
  const classes = useStyles();
  const onClickMarker = () => {
    onClick instanceof Function && onClick();
  };
  return (
    <Button onClick={onClickMarker} style={{ minWidth: 'auto', padding: 0 }}>
      <CardMedia
        className={classes.marker}
        image="images/icMarkerMap.svg"
        alt="slash"
      />
    </Button>
  );
};

export default MarkerMap;
