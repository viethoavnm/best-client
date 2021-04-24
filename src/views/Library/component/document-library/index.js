import { Grid } from '@material-ui/core';
import { LibraryCard, Pagination, Title } from 'components';
import { Fragment } from 'react';
import useStyles from 'views/Library/style';
import NewsEvent from '../../../Search/component/news-event';
import RightNews from 'components/RightNews';
import { useTranslation } from 'react-i18next';

const DocumentLibrary = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.header}>
        <Title size="large">
          <div className={classes.title}>{t('titleDocument')}</div>
          <div className={classes.breadcrumb}>
            {t('txtHome')} / {t('titleLibrary')}/ {t('titleDocument')}
          </div>
        </Title>
      </div>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={4}>
              <LibraryCard
                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                title="Biomass Gasification Technology (BEST)"
                date="20/02/2020"
                author="Le Huy"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <LibraryCard
                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                title="Biomass Gasification Technology (BEST)"
                date="20/02/2020"
                author="Le Huy"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <LibraryCard
                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                title="Biomass Gasification Technology (BEST)"
                date="20/02/2020"
                author="Le Huy"
              />
            </Grid>
          </Grid>
          <Pagination count={10} />
        </Grid>
        <Grid item xs={12} md={4} className={classes.rightSidebar}>
          <RightNews />
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default DocumentLibrary;
