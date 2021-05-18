import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Container, Title } from 'components';
import useStyles from './styles';
import { Grid, Hidden } from '@material-ui/core';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const DownloadAppSection = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Hidden smUp>
        <section>
          <Container>
            <Title size="large" className={classes.titleBox}>
              <h2 className={classes.title}>TẢI APP CỦA CHÚNG TÔI</h2>
              <Grid container spacing={3}>
                <Grid item md={6} xs={6}>
                  <a
                    className={clsx(classes.downloadButton, classes.appstore)}
                    onClick={() => alert('Download')}></a>
                </Grid>
                <Grid item md={6} xs={6}>
                  <a
                    className={clsx(classes.downloadButton, classes.googleplay)}
                    onClick={() => alert('Download')}></a>
                </Grid>
              </Grid>
            </Title>
          </Container>
        </section>
      </Hidden>
      <section className={classes.rootCard}>
        <Container>
          <Grid container spacing={3}>
            <Grid item md={7} xs={12}></Grid>
            <Grid item md={5} xs={12} style={{ textAlign: 'center' }}>
              <div className={classes.downloadContainer}>
                <div className={classes.hideOnMobile}>
                  <h2 className={classes.title}>TẢI APP CỦA CHÚNG TÔI</h2>
                  <p className={classes.description}>
                    Tải ứng dụng để có thêm thông tin về nguồn cung cấp sinh
                    khối và dịch vụ bếp khí hóa sinh khối
                  </p>
                  <Grid container spacing={3}>
                    <Grid item md={6} sm={6} xs={12}>
                      <a
                        className={clsx(
                          classes.downloadButton,
                          classes.appstore
                        )}
                        onClick={() => alert('Download')}></a>
                    </Grid>
                    <Grid item md={6} sm={6} xs={12}>
                      <a
                        className={clsx(
                          classes.downloadButton,
                          classes.googleplay
                        )}
                        onClick={() => alert('Download')}></a>
                    </Grid>
                  </Grid>
                  <h2 className={classes.title}>HƯỚNG DẪN SỬ DỤNG APP</h2>
                  <Link className={classes.instructionButton}>XEM NGAY</Link>
                </div>
                <Hidden smUp>
                  <Grid
                    container
                    spacing={3}
                    style={{ textAlign: 'right', display: 'inline-block' }}>
                    <h2 className={classes.title}>HƯỚNG DẪN SỬ DỤNG APP</h2>
                    <Link className={classes.instructionButton}>XEM NGAY</Link>
                  </Grid>
                </Hidden>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </Fragment>
  );
};

DownloadAppSection.propTypes = {
  className: PropTypes.string
};

export default DownloadAppSection;
