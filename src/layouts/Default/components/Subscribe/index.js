import { Button, InputBase, Paper } from '@material-ui/core';
import { Container } from 'components';
import React, { useState } from 'react';
import useStyles from './styles';
import { postEmail } from 'services/emailSub';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useTranslation } from 'react-i18next';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Subscribe = () => {
  const classes = useStyles();
  const [emailInput, setEmailInput] = useState('');
  const [openSnackBar, setOpenSnackBar] = React.useState(false);
  const [openFailAlert, setOpenFailAlert] = React.useState(false);
  const { t } = useTranslation();
  // We will change to state to control alert fail/success later.

  const submitEmailSub = () => {
    const body = {
      email: emailInput
    };

    setOpenSnackBar(false);
    setOpenFailAlert(false);
    postEmail(body)
      .then(res => {
        console.log('res', res);
        setEmailInput('');
        setOpenSnackBar(true);
      })
      .catch(err => {
        console.log('err', err.response);
        setOpenFailAlert(true);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackBar(false);
  };

  const handleCloseFail = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenFailAlert(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          style={{ minWidth: '400px', height: '50px' }}>
          {t('emailSubSuccess')}
        </Alert>
      </Snackbar>

      <Snackbar
        open={openFailAlert}
        autoHideDuration={6000}
        onClose={handleCloseFail}>
        <Alert
          onClose={handleCloseFail}
          severity="error"
          style={{ minWidth: '400px', height: '50px' }}>
          {t('emaiSubFail')}
        </Alert>
      </Snackbar>

      <Container>
        <div className={classes.content}>
          <div className={classes.label}>{t('titleEmailSub')}</div>
          <Paper component="form" elevation={0} className={classes.form}>
            <InputBase
              className={classes.input}
              placeholder={t('placeholderEmail')}
              inputProps={{ 'aria-label': 'Subscribe' }}
              onChange={e => {
                setEmailInput(e.target.value);
              }}
            />

            <Button className={classes.button} onClick={submitEmailSub}>
              {t('txtRegister')}
            </Button>
          </Paper>
        </div>
      </Container>
    </div>
  );
};

export default Subscribe;
