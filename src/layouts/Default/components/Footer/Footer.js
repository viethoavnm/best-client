import { Divider, Hidden } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import clsx from 'clsx';
import React, { Fragment, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { getSetupByKey } from '../../../../services/setup';
import Subscribe from '../Subscribe';
import useStyles from './Style';

function DefaultLayoutFooter(props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const [configFooter, setConfigFooter] = useState();
  useEffect(() => {
    getSetupByKey('FOOTER_CONFIG')
      .then(res => {
        setConfigFooter(res.data?.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const renderfooter = () => {
    return (
      <Fragment>
        <Box className={classes.downloadBox}>
          <Typography
            color="inherit"
            className={clsx(classes.downloadAppTitle)}>
            TẢI APP TẠI ĐÂY
          </Typography>
          <img src="/images/ic-download.svg" alt="download" />
        </Box>
        <Box className={classes.sponsorBox}>
          <Typography
            color="inherit"
            className={clsx(classes.footerColumnTitle)}>
            Nhà tài trợ
          </Typography>
          <a
            href="https://www.switch-asia.eu/"
            target="_blank"
            style={{ display: 'inline-block' }}>
            <img src="/images/sponsor.png" alt="switchasia-logo" />
          </a>
        </Box>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <Subscribe />
      <footer className={classes.root}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <img
                className="logo-icon"
                src="/images/logo-best.svg"
                alt="logo"
              />
              <p className={classes.title}>Công nghệ khí hóa sinh khối</p>
              <p className={clsx(classes.description)}>
                Giải pháp năng lượng bền vững cho chế biến nông sản và quản lý
                chất thải ở nông thôn Việt Nam.
              </p>
              <div className={clsx(classes.footerInfoDownload)}>
                {renderfooter()}
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography
                color="inherit"
                className={clsx(classes.footerColumnTitle)}>
                {t('aboutUs')}
              </Typography>

              <div>
                <Typography
                  color="inherit"
                  component={Link}
                  to="/home"
                  className={clsx(classes.eachRowItem)}>
                  Trang chủ
                </Typography>

                <Typography
                  color="inherit"
                  component={Link}
                  to="/about-us"
                  className={clsx(classes.eachRowItem)}>
                  Giới thiệu
                </Typography>

                <Typography
                  color="inherit"
                  component={Link}
                  to="/vcbg-technology"
                  className={clsx(classes.eachRowItem)}>
                  Công nghệ VCBG
                </Typography>

                <Typography
                  color="inherit"
                  component={Link}
                  to="/news"
                  className={clsx(classes.eachRowItem)}>
                  Bản tin
                </Typography>

                <Typography
                  color="inherit"
                  component={Link}
                  to="/event"
                  className={clsx(classes.eachRowItem)}>
                  Sự kiện sắp tới
                </Typography>

                <Typography
                  color="inherit"
                  component={Link}
                  to="/library"
                  className={clsx(classes.eachRowItem)}>
                  Thư viện
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography
                color="inherit"
                className={clsx(classes.footerColumnTitle)}>
                {t('agencies')}
              </Typography>

              <div>
                <a
                  href="https://vietnam.oxfam.org/"
                  target="_blank"
                  style={{
                    marginTop: 16,
                    marginBottom: 8,
                    display: 'inline-block'
                  }}>
                  <img src="/images/oxfam.png" alt="oxfam-logo" />
                </a>
                <Typography color="inherit">Oxfam tại Việt Nam</Typography>
                <a
                  href="http://www.ccspin.org/"
                  target="_blank"
                  style={{
                    marginTop: 24,
                    marginBottom: 8,
                    display: 'inline-block'
                  }}>
                  <img src="/images/ccs.png" alt="ccs-logo" />
                </a>
                <Typography color="inherit">
                  CCS - Trung tâm Nghiên cứu, Tư vấn Sáng tạo và Phát triển Bền
                  vững
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <div>
                <Typography
                  color="inherit"
                  className={clsx(classes.footerColumnTitle)}>
                  Liên hệ
                </Typography>

                <ul style={{ listStyle: 'none' }}>
                  <li className={classes.inforRow}>
                    <img
                      className={clsx(classes.footerIcon)}
                      src="/images/icEmail.svg"
                      alt="icEmail"
                    />
                    <Typography color="inherit" className={classes.smTitle}>
                      {configFooter?.email}
                    </Typography>
                  </li>

                  <li className={classes.inforRow}>
                    <img
                      className={clsx(classes.footerIcon)}
                      src="/images/icPhone.svg"
                      alt="icPhone"
                    />
                    <Typography color="inherit" className={classes.smTitle}>
                      {configFooter?.phone_number}
                    </Typography>
                  </li>

                  <li className={classes.inforRow}>
                    <img
                      className={clsx(classes.footerIcon)}
                      src="/images/icLocation.svg"
                      alt="icLocation"
                    />
                    <Typography color="inherit" className={classes.smTitle}>
                      {configFooter?.address}
                    </Typography>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={12} className={classes.footerInfoDownloadSX}>
              {renderfooter()}
            </Grid>
          </Grid>

          {/*==================== End of Footer 1 ====================*/}

          {/*==================== Footer 2 ====================*/}
        </Container>
        <Hidden smUp>
          <Divider />
        </Hidden>
        <Container>
          <div className={clsx(classes.secondFooterBlock)}>
            <Grid container direction="row" alignItems="center">
              <Grid item xs={12} sm={9} md={9} className={classes.textFooter}>
                Trang web này được thiết lập và duy trì với sự hỗ trợ tài chính
                của Liên minh Châu Âu. Các nội dung trong trang này thuộc trách
                nhiệm của tổ chức Oxfam tại Việt Nam và Trung tâm Nghiên cứu, Tư
                vấn Sáng tạo và Phát triển Bền vững (CCS), và không nhất thiết
                phản ánh quan điểm của Liên minh Châu Âu.
              </Grid>

              <Grid item xs={12} sm={3} md={3} className={classes.teso}>
                © 2021 TESO
              </Grid>
            </Grid>
          </div>
          {/*==================== End of Footer 2 ====================*/}

          {/*====================  Scroll top ====================*/}
          <Button
            className={classes.scrollToTop}
            variant="contained"
            onClick={scrollToTop}>
            <ArrowUpwardIcon />
          </Button>
          {/*====================  End of scroll top  ====================*/}
        </Container>
      </footer>
    </Fragment>
  );
}

export default React.memo(DefaultLayoutFooter);
