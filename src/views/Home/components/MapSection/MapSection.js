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
      <Box className={classes.detailContent}>
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
      <Box display="flex" justifyContent="center" height="328px" width="100%">
        <Box height="100%" width="100%" className={clsx(classes.mapContent)}>
          <div className={clsx(classes.googleMapFrame)}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: 'AIzaSyApTCjw-LZYi0eZq47tvrm7gM_W1qQZQSg'
              }}
              yesIWantToUseGoogleMapApiInternals
              defaultCenter={{ lat: 21.02, lng: 105.83416 }}
              defaultZoom={19}>
              <MarkerMap lat={21.02} lng={105.83416} text="My Marker" />
            </GoogleMapReact>
          </div>
        </Box>
      </Box>
    );
  };

  return (
    <section>
      <Container>
        {_renderTitle('Địa bàn dự án')}

        <Grid container>
          <Grid
            item
            xs={12}
            sm={4}
            className={clsx(classes.detailLocationView)}>
            <Card className={classes.detailCard} elevation={0}>
              {_renderLocationDetail()}
            </Card>
          </Grid>

          <Grid item xs={12} sm={8} className={clsx(classes.mapView)}>
            <Card className={classes.detailCard} elevation={0}>
              {_renderMap()}
            </Card>
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
