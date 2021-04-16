import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import useStyles, { CustomColor } from './Style';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';

import { animateScroll as scroll } from 'react-scroll';
import Subscribe from '../Subscribe';

function DefaultLayoutFooter(props) {
  const classes = useStyles();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const renderfooter = () => {
    return (
      <>
        <div className={clsx(classes.footerItem)}>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Typography
              color="inherit"
              className={clsx(classes.downloadAppTitle)}>
              TẢI APP TẠI ĐÂY
            </Typography>

            <img src="/images/ic-download.svg" alt="download" />
          </Box>
        </div>

        <div className={clsx(classes.footerItem)}>
          <Typography
            color="inherit"
            className={clsx(classes.footerColumnTitle)}>
            Nhà tài trợ
          </Typography>

          <img src="/images/sponsor.png" alt="logo" />
        </div>
      </>
    );
  };

  return (
    <div>
      <Subscribe />

      <Container>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            xl={3}
            className={clsx(classes.footerItem)}>
            <div className="w-full sm:w-2/5 px-16" style={{ marginTop: 45 }}>
              <img
                className="logo-icon"
                src="/images/logo-best.svg"
                alt="logo"
              />

              <CustomColor
                color="inherit"
                className={clsx(classes.footerColumnTitle)}>
                Công nghệ khí hóa sinh khối
              </CustomColor>

              <Typography
                color="inherit"
                className={clsx(classes.footerColumnDes)}>
                Giải pháp năng lượng bền vững cho chế biến nông sản và quản lý
                chất thải ở nông thôn Việt Nam.
              </Typography>
              <div className={clsx(classes.footerInfoDownload)}>
                {renderfooter()}
              </div>
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            xl={3}
            className={clsx(classes.footerItem)}>
            <Typography
              color="inherit"
              className={clsx(classes.footerColumnTitle)}>
              Về chúng tôi
            </Typography>

            <div className={clsx(classes.columnContent)}>
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
                to="/events"
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

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            xl={3}
            className={clsx(classes.footerItem)}>
            <Typography
              color="inherit"
              className={clsx(classes.footerColumnTitle)}>
              Đơn vị thực hiện
            </Typography>

            <div className={clsx(classes.columnContent)}>
              <Typography color="inherit" className={clsx(classes.eachRowItem)}>
                Oxfam tại Việt Nam
              </Typography>
              <Typography color="inherit" className={clsx(classes.eachRowItem)}>
                CCS
              </Typography>
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            xl={3}
            className={clsx(classes.footerItem)}>
            <div className="w-full sm:w-1/5 px-16" style={{}}>
              <Typography
                color="inherit"
                className={clsx(classes.footerColumnTitle)}>
                Liên hệ
              </Typography>

              <ul style={{}}>
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  className={clsx(classes.inforRow)}>
                  <img
                    className={clsx(classes.footerIcon)}
                    src="/images/icEmail.svg"
                    alt="icEmail"
                  />
                  <Typography color="inherit" className={classes.smTitle}>
                    admin@ccsspin.com
                  </Typography>
                </Box>

                <Box display="flex" flexDirection="row" alignItems="center">
                  <img
                    className={clsx(classes.footerIcon)}
                    src="/images/icPhone.svg"
                    alt="icPhone"
                  />
                  <Typography color="inherit" className={classes.smTitle}>
                    024 6260 5318
                  </Typography>
                </Box>

                <Box display="flex" flexDirection="row" alignItems="center">
                  <img
                    className={clsx(classes.footerIcon)}
                    src="/images/icLocation.svg"
                    alt="icLocation"
                  />
                  <Typography color="inherit" className={classes.smTitle}>
                    #49 ngõ 2 phố Hoàng Sâm, phường Nghĩa Đô, quận Cầu Giấy, TP
                    Hà Nội, Việt Nam.
                  </Typography>
                </Box>
              </ul>
            </div>
          </Grid>
          <Grid
            container
            direction="row"
            alignItems="center"
            spacing={3}
            className={clsx(classes.footerItem, classes.footerInfoDownloadSX)}>
            {renderfooter()}
          </Grid>
        </Grid>
      </Container>
      {/*==================== End of Footer 1 ====================*/}

      {/*==================== Footer 2 ====================*/}
      <div className={clsx(classes.secondFooterBlock)}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid
            item
            xs={12}
            sm={6}
            md={9}
            lg={9}
            xl={9}
            className={clsx(classes.secondFooterItem)}>
            <Typography className={classes.textFooter} color="inherit">
              Trang web này được thiết lập và duy trì với sự hỗ trợ tài chính
              của Liên minh Châu Âu. Các nội dung trong trang này thuộc trách
              nhiệm của tổ chức Oxfam tại Việt Nam và Trung tâm Nghiên cứu, Tư
              vấn Sáng tạo và Phát triển Bền vững (CCS), và không nhất thiết
              phản ánh quan điểm của Liên minh Châu Âu.
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            lg={2}
            xl={2}
            className={clsx(classes.secondFooterItem)}>
            <Typography>© 2021 TESO</Typography>
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
    </div>
  );
}

export default React.memo(DefaultLayoutFooter);
