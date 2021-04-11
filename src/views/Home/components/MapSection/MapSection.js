import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Hidden, Grid, Box, Typography } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';
import { Container, Title, MarkerMap } from 'components';
import { Link } from 'react-router-dom';
import { ChevronRight } from '@material-ui/icons';
import Card from '@material-ui/core/CardMedia';

import useStyles from './styles';

const MapSection = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const _renderTitle = title => {
    return (
      <Title size="large" className={classes.titleBox}>
        <div className={classes.titleContent}>
          <h2 className={classes.title}>{title}</h2>
          {/* <Link to="/" className={classes.readMore}>Xem thêm <ChevronRight/></Link> */}
        </div>
      </Title>
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
    <section>
      <Container>
        {_renderTitle('Địa bàn dự án')}

        <Grid container>
          <Grid item xs={12} sm={6} className={clsx(classes.detailLocation)}>
            {_renderLocationDetail()}
          </Grid>

          <Grid item xs={12} sm={6} className={clsx(classes.mapView)}>
            {_renderMap()}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

MapSection.propTypes = {
  className: PropTypes.string
};

export default MapSection;
