import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import useStyles from './Style';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { animateScroll as scroll } from 'react-scroll';

function DefaultLayoutFooter(props) {
  const classes = useStyles();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      {/*==================== Đăng ký nhận tin ====================*/}
      <div
        className="flex flex-wrap w-full"
        style={{
          width: '100%',
          background: `linear-gradient(90deg, #92BF1F -18.89%, #F7B033 125.73%)`
        }}>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Box className={classes.wrapperFooter}>
            <Typography className={classes.titleFooter}>
              ĐĂNG KÝ NHẬN THÔNG TIN MỚI NHẤT
            </Typography>
          </Box>

          <Box display="flex" flexDirection="row" alignItems="center">
            <InputBase
              className={classes.inputEmail}
              id="input-email"
              placeholder="Nhập email của bạn"
              variant="outlined"
            />

            <Button className={classes.btnEmail} variant="contained">
              <Typography className={classes.textBtnEmail}>ĐĂNG KÝ</Typography>
            </Button>
          </Box>
        </Box>
      </div>
      {/*==================== End of Đăng ký nhận tin ====================*/}

      {/*==================== Footer 1 ====================*/}
      <Container>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <div className="w-full sm:w-2/5 px-16" style={{ marginTop: 45 }}>
              <img
                className="logo-icon"
                src="assets/images/logos/logo-best.png"
                alt="logo"
              />
              <Typography className="text-17 mb-4 font-bold">
                Công nghệ khí hóa sinh khối
              </Typography>

              <Typography className="text-13" color="inherit">
                Giải pháp năng lượng bền vững cho chế biến nông sản và quản lý
                chất thải ở nông thôn Việt Nam.
              </Typography>

              <Typography
                className="text-17 mb-4 font-bold"
                style={{ marginTop: 10 }}>
                Nhà tài trợ
              </Typography>
              <img src="assets/images/sponsor.png" alt="logo" />
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <div className="w-full sm:w-1/5" style={{ marginTop: 45 }}>
              <Typography className="text-17 mb-4">Về chúng tôi</Typography>
              <ul style={{ marginTop: 45 }}>
                <li>
                  <Link to="/home">Trang chủ</Link>
                </li>
                <li>
                  <Link to="/about-us">Giới thiệu</Link>
                </li>
                <li>
                  <Link to="/vcbg-technology">Công nghệ VCBG</Link>
                </li>

                <li>
                  <Link to="/news">Bản tin</Link>
                </li>
                <li>
                  <Link to="/events">Sự kiện sắp tới</Link>
                </li>
                <li>
                  <Link to="/library">Thư viện</Link>
                </li>
              </ul>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <div className="w-full sm:w-1/5 px-16" style={{ marginTop: 45 }}>
              <Typography className="text-17 mb-4">Đơn vị thực hiện</Typography>
              <ul style={{ marginTop: 45 }}>
                <li>Oxfam tại Việt Nam</li>
                <li>CCS</li>
              </ul>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <div className="w-full sm:w-1/5 px-16" style={{ marginTop: 45 }}>
              <Typography className="text-17 mb-4">Liên hệ</Typography>
              <ul style={{ marginTop: 45 }}>
                <li>
                  <i className="fi flaticon-envelope">admin@ccsspin.com</i>
                </li>
                <li>
                  <i className="fi flaticon-call" />
                  024 6260 5318
                </li>
                <li>
                  <i className="fi flaticon-pin" />
                  #49 ngõ 2 phố Hoàng Sâm, phường Nghĩa Đô, quận Cầu Giấy, TP Hà
                  Nội, Việt Nam.
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Container>
      {/*==================== End of Footer 1 ====================*/}

      {/*==================== Footer 2 ====================*/}
      <Container>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} sm={6} md={10} lg={10} xl={10}>
            <Typography className="text-13" color="inherit">
              Trang web này được thiết lập và duy trì với sự hỗ trợ tài chính
              của Liên minh Châu Âu. Các nội dung trong trang này thuộc trách
              nhiệm của tổ chức Oxfam tại Việt Nam và Trung tâm Nghiên cứu, Tư
              vấn Sáng tạo và Phát triển Bền vững (CCS), và không nhất thiết
              phản ánh quan điểm của Liên minh Châu Âu.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
            <Typography>© 2021 TESO</Typography>
          </Grid>
        </Grid>
      </Container>
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
