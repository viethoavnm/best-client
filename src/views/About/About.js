import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

import { colors } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';

import { Page, ShareSocial, RightSidebar } from 'components';
import renderHTML from 'react-render-html';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  tabs: {
    marginTop: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300],
    marginTop: 20
  },
  alert: {
    marginTop: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(3)
  }
}));

const htmlContent = `
  <figure class="image"><img src="https://33333.cdn.cke-cs.com/rc1DFuFpHqcR3Mah6y0e/images/3ffa2ccba389526558078f6a28375134f047b464b630f9fc.png" srcset="https://33333.cdn.cke-cs.com/rc1DFuFpHqcR3Mah6y0e/images/3ffa2ccba389526558078f6a28375134f047b464b630f9fc.png/w_110 110w, https://33333.cdn.cke-cs.com/rc1DFuFpHqcR3Mah6y0e/images/3ffa2ccba389526558078f6a28375134f047b464b630f9fc.png/w_190 190w, https://33333.cdn.cke-cs.com/rc1DFuFpHqcR3Mah6y0e/images/3ffa2ccba389526558078f6a28375134f047b464b630f9fc.png/w_270 270w, https://33333.cdn.cke-cs.com/rc1DFuFpHqcR3Mah6y0e/images/3ffa2ccba389526558078f6a28375134f047b464b630f9fc.png/w_350 350w, https://33333.cdn.cke-cs.com/rc1DFuFpHqcR3Mah6y0e/images/3ffa2ccba389526558078f6a28375134f047b464b630f9fc.png/w_430 430w, https://33333.cdn.cke-cs.com/rc1DFuFpHqcR3Mah6y0e/images/3ffa2ccba389526558078f6a28375134f047b464b630f9fc.png/w_510 510w, https://33333.cdn.cke-cs.com/rc1DFuFpHqcR3Mah6y0e/images/3ffa2ccba389526558078f6a28375134f047b464b630f9fc.png/w_590 590w, https://33333.cdn.cke-cs.com/rc1DFuFpHqcR3Mah6y0e/images/3ffa2ccba389526558078f6a28375134f047b464b630f9fc.png/w_670 670w, https://33333.cdn.cke-cs.com/rc1DFuFpHqcR3Mah6y0e/images/3ffa2ccba389526558078f6a28375134f047b464b630f9fc.png/w_750 750w" sizes="100vw" width="750"></figure>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>Khi nói đến việc xử lý vấn đề và đưa ra quyết định khó khăn, mọi người thường có xu hướng lập kế hoạch, thậm chí là rất nhiều kế hoạch (đặc biệt là những dự tính riêng của mỗi cá nhân). Và bởi muốn chúng phải hoàn hảo, nên vô tình, họ đang tự làm khó bản thân.</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>Việc lập kế hoạch này chắc chắn sẽ mất rất nhiều thời gian. Và thay vì mục đích ban đầu là phải đưa ra quyết định, lúc này, quá trình đưa ra quyết định lại trở thành trọng tâm của vấn đề.</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>Đã có nhiều nghiên cứu và tranh luận về điều này, nhưng vẫn chưa chứng minh được gì cụ thể. Quá trình trên diễn ra trong bao lâu còn tuỳ thuộc vào bản chất của quyết định, nhưng có một điều chắc chắn rằng: tất cả đều bắt nguồn từ sự quá cầu toàn.</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>Trên đời này không tồn tại thứ gọi là kế hoạch hoàn hảo!</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>Trong một thế giới luôn vận động, không ai có khả năng biết trước kết quả của sự việc. Vì vậy, có còn hơn không; những gì bạn làm không quan trọng, quan trọng là bạn đã làm được gì để học hỏi và tiến về phía trước.</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>Các nhà lãnh đạo sáng suốt là những người luôn ý thức được rằng để giải quyết bất kỳ vấn đề lớn nào, cần phản hồi và xử lý thật nhanh chóng dù quyết định đưa ra có đúng hoàn toàn hay không. Nếu là không, thì họ biết cách xoay xở để tìm ra hướng đi mới.</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>Quyết định trước đó là tiền đề cho cái sau này. Con đường mới chỉ được mở ra khi chúng ta có hành động thiết thực</p>
`;

const About = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const _renderTitle = title => {
    return (
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        marginBottom="30px"
        marginTop="40px"
        justifyContent="space-between"
        paddingRight="26px"
        bgcolor="#F6F6F6">
        <Box display="flex" flexDirection="row" alignItems="center">
          <CardMedia
            className={classes.icSlash}
            image="images/ic-slash-title.svg"
            alt="slash"
          />
          <Typography className={classes.title}>{title}</Typography>
        </Box>

        <Typography className={classes.breadScrumb}>
          Trang chủ/ Giới thiệu
        </Typography>
      </Box>
    );
  };

  const _renderHeaderArticle = () => {
    return (
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        marginBottom="30px"
        alignItems="center">
        <Box display="flex" flexDirection="row">
          <CardMedia
            className={classes.smallClock}
            image="images/ic-small-clock.svg"
            alt="small-clock"
          />
          <Typography className={classes.timeSuggest}>30/12/2020</Typography>
        </Box>
        <ShareSocial />
      </Box>
    );
  };

  return (
    <Page className={classes.root} title="About">
      <div className={classes.content}>
        {_renderTitle('Giới Thiệu')}

        <Grid
          {...rest}
          className={clsx(classes.root, className)}
          container
          spacing={3}>
          <Grid item lg={8} md={6} xl={9} xs={12}>
            {_renderHeaderArticle()}
            {renderHTML(htmlContent)}
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <RightSidebar />
          </Grid>
        </Grid>

        <Divider className={classes.divider} />
      </div>
    </Page>
  );
};

export default About;
