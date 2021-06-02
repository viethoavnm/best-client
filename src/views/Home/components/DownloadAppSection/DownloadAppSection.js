import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Container, Title } from 'components';
import useStyles from './styles';
import { Grid, Hidden } from '@material-ui/core';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getSetupByKey } from 'services/setup';
import { convertTranslations } from 'utils';
import { useSelector } from 'react-redux';

const DownloadAppSection = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const lang = useSelector(state => state.multiLang.lang);
  const [config, setConfig] = useState({});

  useEffect(() => {
    getSetupByKey('DOWNLOAD_APP_CONFIG')
      .then(res => {
        let data = res.data?.data;
        convertTranslations(data?.post);
        setConfig(data);
      })
      .catch(err => {});
  }, []);

  return (
    <Fragment>
      <Hidden smUp>
        <section>
          <Container>
            <div className={classes.titleBox}>
              <h2 className={classes.title}>{t('downloadApp.title')}</h2>
            </div>
            <Grid container>
              <Grid item md={6} xs={6}>
                <Link
                  to={config?.appleLink || '#'}
                  target="_blank"
                  className={clsx(
                    classes.downloadButton,
                    classes.appstore
                  )}></Link>
              </Grid>
              <Grid item md={6} xs={6}>
                <Link
                  to={config?.googleLink || '#'}
                  target="_blank"
                  className={clsx(
                    classes.downloadButton,
                    classes.googleplay
                  )}></Link>
              </Grid>
            </Grid>
          </Container>
        </section>
      </Hidden>
      <section className={classes.root}>
        <Container>
          <Grid container spacing={3}>
            <Grid item md={7} xs={12}></Grid>
            <Grid item md={5} xs={12} style={{ textAlign: 'center' }}>
              <div className={classes.downloadContainer}>
                <div className={classes.hideOnMobile}>
                  <h2 className={classes.title}>{t('downloadApp.title')}</h2>
                  <p className={classes.description}>
                    {t('downloadApp.description')}
                  </p>
                  <Grid container spacing={3}>
                    <Grid item md={6} sm={6} xs={12}>
                      <Link
                        to={config?.appleLink || '#'}
                        target="_blank"
                        className={clsx(
                          classes.downloadButton,
                          classes.appstore
                        )}></Link>
                    </Grid>
                    <Grid item md={6} sm={6} xs={12}>
                      <Link
                        to={config?.googleLink || '#'}
                        target="_blank"
                        className={clsx(
                          classes.downloadButton,
                          classes.googleplay
                        )}></Link>
                    </Grid>
                  </Grid>
                  <h2 className={classes.title}>
                    {t('downloadApp.instructionTitle')}
                  </h2>
                  <Link
                    to={
                      config?.post?.[lang]?.slug
                        ? `/post/${config?.post?.[lang]?.slug}`
                        : '#'
                    }
                    target="_blank"
                    className={classes.instructionButton}>
                    {t('downloadApp.instructionButton')}
                  </Link>
                </div>
                <Hidden smUp>
                  <Grid
                    container
                    spacing={3}
                    style={{ textAlign: 'right', display: 'inline-block' }}>
                    <h2 className={classes.title}>
                      {t('downloadApp.instructionTitle')}
                    </h2>
                    <Link
                      to={
                        config?.post?.[lang]?.slug
                          ? `/post/${config?.post?.[lang]?.slug}`
                          : '#'
                      }
                      target="_blank"
                      className={classes.instructionButton}>
                      {t('downloadApp.instructionButton')}
                    </Link>
                  </Grid>
                </Hidden>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </Fragment>
  );
};

DownloadAppSection.propTypes = {
  className: PropTypes.string
};

export default DownloadAppSection;
