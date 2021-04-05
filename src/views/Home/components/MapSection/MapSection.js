import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Hidden, Grid, Box, Typography } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';
import { MarkerMap } from 'components';

import useStyles from './styles';

const MapSection = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const _renderTitle = title => {
    return (
      <div>
        <Hidden smDown>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            marginBottom="30px"
            marginTop="40px"
            bgcolor="#F6F6F6">
            <img
              className={clsx(classes.slashIcon)}
              src="images/ic-slash-title.svg"
              alt="slash"
            />
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              className={classes.title1}>
              {title.toUpperCase()}
            </Typography>
          </Box>
        </Hidden>

        <Hidden lgUp>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              className={classes.title2}>
              {title.toUpperCase()}
            </Typography>
          </Box>
        </Hidden>
      </div>
    );
  };

  const _renderLocationDetail = () => {
    return (
      <Box className={classes.leftProject}>
        <Typography className={classes.titleProject}>
          Hộ cơ khí Hiệp Phát
        </Typography>
        <Typography className={classes.contentProject}>
          139 Trần Nhật Duật, P. Kim Tân, Tp Lào Cai
        </Typography>
        <Typography className={classes.subTitle}>Giờ mở cửa</Typography>
        <Typography className={classes.contentProject}>
          08:00 - 18:00
        </Typography>
        <Typography className={classes.subTitle}>Mặt hàng</Typography>
        <Typography className={classes.contentProject}>
          Bếp khí hóa, sinh khối
        </Typography>
        <Typography className={classes.subTitle}>Dịch vụ về cơ khí</Typography>
        <Typography className={classes.contentProject}>
          Lắp đặt và sữa chữa
        </Typography>
      </Box>
    );
  };

  const _renderMap = () => {
    return (
      <Box height="328px" width="100%">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyApTCjw-LZYi0eZq47tvrm7gM_W1qQZQSg'
          }}
          defaultCenter={{ lat: 21.02, lng: 105.83416 }}
          defaultZoom={11}>
          <MarkerMap lat={21.027763} lng={105.83416} text="My Marker" />
        </GoogleMapReact>
      </Box>
    );
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      {_renderTitle('Địa bàn dự án')}

      <Hidden smDown>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            {_renderLocationDetail()}
          </Grid>

          <Grid item xs={12} sm={6}>
            {_renderMap()}
          </Grid>
        </Grid>
      </Hidden>

      <Hidden lgUp>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            {_renderMap()}
          </Grid>
          <Grid item xs={12} md={6}>
            {_renderLocationDetail()}
          </Grid>
        </Grid>
      </Hidden>
    </div>
  );
};

MapSection.propTypes = {
  className: PropTypes.string
};

export default MapSection;
