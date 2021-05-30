import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { makeStyles } from '@material-ui/styles';
import { Paper, Typography, Link, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 420,
    position: 'fixed',
    bottom: 0,
    right: 0,
    margin: theme.spacing(3),
    outline: 'none',
    zIndex: 2000
  },
  media: {
    padding: theme.spacing(1, 2),
    height: 180,
    textAlign: 'center',
    '& > img': {
      height: '100%',
      width: 'auto'
    }
  },
  content: {
    padding: theme.spacing(1, 2)
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(1, 2, 2, 1)
  }
}));

const CookiesNotification = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('consent');

    if (!consent) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    Cookies.set('consent', 'true', { expires: 365 });
    setOpen(false);
  };

  if (!open) {
    return null;
  }

  return (
    <Paper className={classes.root} elevation={3}>
      <div className={classes.media}>
        <img alt="Cookies" src="/images/undraw_cookie_love_ulvn.svg" />
      </div>
      <div className={classes.content}>
        <Typography variant="body1">
          {t('cookieConsent.message')}{' '}
          <Link className={classes.link} component="a" href="#" target="_blank">
            {t('cookieConsent.policy')}
          </Link>
          .
        </Typography>
      </div>
      <div className={classes.actions}>
        <Button
          className={classes.agreeButton}
          color="primary"
          onClick={handleClose}
          variant="contained">
          {t('cookieConsent.argee')}
        </Button>
      </div>
    </Paper>
  );
};

export default CookiesNotification;
