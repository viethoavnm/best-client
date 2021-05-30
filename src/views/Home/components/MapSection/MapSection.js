import { Button, Grid, Link as LinkUi, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { Container, Title } from 'components';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { ReactComponent as MapIcon } from '../../../../assets/img/map.svg';
import Map from './Map';
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

  const [shop, setShop] = useState({});

  const _renderLocationDetail = () => {
    if (!shop?._id) {
      return (
        <div className="map-box">
          Nhấp chuột vào 1 địa điểm để xem thông tin chi tiết
        </div>
      );
    }
    return (
      <div className="map-box">
        <Typography className={classes.titleProject}>{shop?.name}</Typography>
        <Typography className={classes.contentProject}>
          {shop?.address}
        </Typography>
        <Typography className={classes.contentProject}>{shop?.type}</Typography>
        {/* <Typography className={classes.subTitle}>Giờ mở cửa</Typography>
        <Typography className={classes.contentProject}>
          08:00 - 18:00
        </Typography> */}
        {/* <Typography className={classes.subTitle}>Mặt hàng</Typography>
        <Typography className={classes.contentProject}>
          Bếp khí hóa, sinh khối
        </Typography>
        <Typography className={classes.subTitle}>Dịch vụ về cơ khí</Typography>
        <Typography className={classes.contentProject}>
          Lắp đặt và sữa chữa
        </Typography> */}
      </div>
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
        <Title size="large" className={classes.titleBox}>
          <div className={classes.titleContent} ref={refTitle}>
            <h2 className={classes.title}>{t('titleLocationCompany')}</h2>
          </div>
        </Title>

        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={4}
            className={clsx(classes.detailLocationView)}>
            {_renderLocationDetail()}
          </Grid>

          <Grid item xs={12} sm={8} className={clsx(classes.mapView)}>
            <Map setShop={setShop} />
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
