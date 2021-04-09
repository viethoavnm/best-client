import { Button, InputBase, Paper } from '@material-ui/core';
import { Container } from 'components';
import React from 'react';
import useStyles from './styles';

const Subscribe = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.content}>
          <div className={classes.label}>ĐĂNG KÝ NHẬN THÔNG TIN MỚI NHẤT</div>
          <Paper component="form" elevation={0}  className={classes.form}>
            <InputBase
              className={classes.input}
              placeholder="Nhập email của bạn"
              inputProps={{ 'aria-label': 'Subscribe' }}
            />
            <Button className={classes.button}>Đăng ký</Button>
          </Paper>
        </div>
      </Container>
    </div>
  );
};

export default Subscribe;
