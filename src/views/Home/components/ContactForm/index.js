import React, { useState } from 'react';
import { Button, Grid } from '@material-ui/core';
import { Container } from 'components';
import useStyles from './styles';
import Bg from '../../../../assets/img/contact-form.png';
import { postContactForm } from 'services/contactForm';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useTranslation } from 'react-i18next';
import { isEmpty, isEmail } from '../../../../helpers';

const Alert = props => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const ContactForm = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [submit, setSubmit] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [openFailAlert, setOpenFailAlert] = useState(false);
  const { t } = useTranslation();

  const validate = () => {
    if (
      isEmpty(name) ||
      isEmpty(title) ||
      isEmpty(email) ||
      !isEmail(email) ||
      isEmpty(content)
    ) {
      return false;
    }
    return true;
  };

  const onSubmit = e => {
    e?.preventDefault();
    setSubmit(true);
    if (validate()) {
      setSubmit(false);
      const body = {
        email,
        name,
        title,
        content
      };

      setOpenSnackBar(false);
      setOpenFailAlert(false);
      postContactForm(body)
        .then(res => {
          console.log('res', res);
          setEmail('');
          setContent('');
          setName('');
          setTitle('');
          setOpenSnackBar(true);
        })
        .catch(err => {
          console.log('err', err.response);
          setOpenFailAlert(true);
        });
    }
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
          {t('contactFormSuccess')}
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
          {t('contactFormFail')}
        </Alert>
      </Snackbar>
      <Container>
        <Grid container className={classes.root}>
          <Grid
            item
            xs={12}
            md={7}
            className={classes.bg}
            style={{ backgroundImage: `url(${Bg})` }}></Grid>
          <Grid item xs={12} md={5}>
            <div className={classes.border}>
              <div className={classes.form}>
                <div className={classes.title}>{t('contactFormTitle')}</div>
                <div className={classes.row}>
                  <label className={classes.label}>
                    {t('contactFormInputName')}
                  </label>
                  <input
                    className={classes.input}
                    fullWidth
                    type="text"
                    required
                    value={name}
                    onChange={e => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className={classes.row}>
                  <label className={classes.label}>
                    {t('contactFormInputTitle')}
                  </label>
                  <input
                    className={classes.input}
                    fullWidth
                    type="text"
                    required
                    value={title}
                    onChange={e => {
                      setTitle(e.target.value);
                    }}
                  />
                </div>
                <div className={classes.row}>
                  <label className={classes.label}>
                    {t('contactFormInputEmail')}
                  </label>
                  <input
                    className={classes.input}
                    fullWidth
                    type="email"
                    required
                    value={email}
                    onChange={e => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className={classes.row}>
                  <p style={{ color: 'red' }}>
                    {submit && (!isEmail(email) || isEmpty(email))
                      ? t('inputNotEmail')
                      : null}
                  </p>
                </div>
                <div className={classes.row} style={{ alignItems: 'baseline' }}>
                  <label className={classes.label}>
                    {t('contactFormInputContent')}
                  </label>
                  <textarea
                    className={classes.textarea}
                    rows={3}
                    type="text"
                    required
                    value={content}
                    onChange={e => {
                      setContent(e.target.value);
                    }}
                  />
                </div>
                <div className={classes.row} style={{ alignItems: 'baseline' }}>
                  <p style={{ color: 'red' }}>
                    {submit && !validate() ? t('inputEmpty') : null}
                  </p>
                </div>
                <div className={classes.row} style={{ alignItems: 'baseline' }}>
                  <label className={classes.label}></label>
                  <Button className={classes.btn} onClick={onSubmit}>
                    {t('submitButton')}
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContactForm;
