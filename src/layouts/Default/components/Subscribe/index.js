import { Button, InputBase, Paper } from '@material-ui/core';
import { Container } from 'components';
import React, { useState } from 'react';
import useStyles from './styles';
import { postEmail } from 'services/emailSub';

const Subscribe = () => {
  const classes = useStyles();
  const [emailInput, setEmailInput] = useState('');

  const submitEmailSub = () => {
    const body = {
      email: emailInput
    };

    postEmail(body)
      .then(res => console.log('res', res))
      .catch(err => {
        console.log('err', err.response);
      });
  };

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.content}>
          <div className={classes.label}>ĐĂNG KÝ NHẬN THÔNG TIN MỚI NHẤT</div>
          <Paper component="form" elevation={0} className={classes.form}>
            <InputBase
              className={classes.input}
              placeholder="Nhập email của bạn"
              inputProps={{ 'aria-label': 'Subscribe' }}
              onChange={e => {
                setEmailInput(e.target.value);
              }}
            />

            <Button className={classes.button} onClick={submitEmailSub}>
              Đăng ký
            </Button>
          </Paper>
        </div>
      </Container>
    </div>
  );
};

export default Subscribe;
