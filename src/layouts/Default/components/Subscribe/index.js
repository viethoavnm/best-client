import { Button, InputBase, Paper } from '@material-ui/core';
import { Container } from 'components';
import React, { useState } from 'react';
import useStyles from './styles';
import { postEmail } from 'services/emailSub';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useTranslation } from 'react-i18next';
import { isEmail } from '../../../../helpers';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Subscribe = () => {
  const classes = useStyles();
  const [emailInput, setEmailInput] = useState('');
  const [openSnackBar, setOpenSnackBar] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const { t } = useTranslation();
  // We will change to state to control alert fail/success later.

  const submitEmailSub = e => {
    e.preventDefault();
    if (!isEmail(e.target.value)) {
      setErrorMessage(t('emailSub.placeholderEmail'));
      return;
    }
    const body = {
      email: emailInput
    };

    setOpenSnackBar(false);
    setErrorMessage('');
    postEmail(body)
      .then(res => {
        setEmailInput('');
        setOpenSnackBar(true);
        setErrorMessage('');
      })
      .catch(err => {
        if (err.response.status === 409) {
          setErrorMessage(t('emailSub.duplicateMessage'));
        } else {
          setErrorMessage(t('emailSub.serverErrorMessage'));
        }
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
    setErrorMessage('');
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
          {t('emailSub.successMessage')}
        </Alert>
      </Snackbar>

      <Snackbar
        open={errorMessage !== ''}
        autoHideDuration={6000}
        onClose={handleCloseFail}>
        <Alert
          onClose={handleCloseFail}
          severity="error"
          style={{ minWidth: '400px', height: '50px' }}>
          {errorMessage}
        </Alert>
      </Snackbar>

      <Container>
        <div className={classes.content}>
          <div className={classes.label}>{t('emailSub.title')}</div>
          <Paper
            component="form"
            elevation={0}
            className={classes.form}
            onSubmit={submitEmailSub}>
            <InputBase
              className={classes.input}
              type="email"
              placeholder={t('emailSub.placeholderEmail')}
              inputProps={{ 'aria-label': t('emailSub.placeholderEmail') }}
              onChange={e => setEmailInput(e.target.value)}
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
