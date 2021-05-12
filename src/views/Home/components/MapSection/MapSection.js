import {
  Box,
  Button,
  Grid,
  Link as LinkUi,
  Typography
} from '@material-ui/core';
import Card from '@material-ui/core/CardMedia';
import clsx from 'clsx';
import { Container, MarkerMap, Title } from 'components';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { ReactComponent as MapIcon } from '../../../../assets/img/map.svg';
import useStyles from './styles';

export const mapIcon = 'map-icon';

const MapSection = props => {
  const refTitle = useRef();
  const { className, ...rest } = props;
  const { t } = useTranslation();
  const classes = useStyles();

  const scrollIntoView = () => {
    refTitle?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const _renderTitle = title => {
    return (
      <Title size="large" className={classes.titleBox}>
        <div className={classes.titleContent} ref={refTitle}>
          <h2 className={classes.title}>{title}</h2>
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

  const renderMapIcon = () => {
    const refMapIcon = document.getElementById(mapIcon);
    if (refMapIcon) {
      return createPortal(
        <Button
          component={LinkUi}
          className={classes.mapIcon}
          onClick={scrollIntoView}>
          <MapIcon />
          <span>Bản đồ</span>
        </Button>,
        refMapIcon
      );
    }
    return null;
  };

  return (
    <section>
      {renderMapIcon()}
      <Container>
        {_renderTitle(t('titleLocationCompany'))}

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
