import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Typography, Button, useTheme, useMediaQuery } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Page } from 'components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    paddingTop: '10vh',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center'
  },
  imageContainer: {
    marginTop: theme.spacing(6),
    display: 'flex',
    justifyContent: 'center'
  },
  image: {
    maxWidth: '100%',
    width: 560,
    maxHeight: 300,
    height: 'auto'
  },
  buttonContainer: {
    marginTop: theme.spacing(6),
    display: 'flex',
    justifyContent: 'center'
  }
}));

const Error404 = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Page className={classes.root}>
      <Helmet>
        <title>{t('errorPage.404Title')}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Typography align="center" variant={mobileDevice ? 'h4' : 'h1'}>
        {t('errorPage.404Title')}
      </Typography>
      <Typography align="center" variant="subtitle2">
        {t('errorPage.404Description')}
      </Typography>
      <div className={classes.imageContainer}>
        <img
          alt="Under development"
          className={classes.image}
          src="/images/undraw_page_not_found_su7k.svg"
        />
      </div>
      <div className={classes.buttonContainer}>
        <Button
          color="primary"
          component={RouterLink}
          to="/"
          variant="outlined">
          {t('errorPage.backButton')}
        </Button>
      </div>
    </Page>
  );
};

export default Error404;
