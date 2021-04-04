import { Grid } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { LibraryCard, Pagination, Title } from 'components';
import { Fragment } from 'react';
import NewsEvent from '../../../Search/component/news-event';
const useStyles = makeStyles(theme =>
  createStyles({
    rightSidebar: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block'
      }
    },
    header: {
      padding: '40px 0'
    },
    height: { height: 48 },
    title: {
      flexGrow: 1,
      color: '#3A3A3A',
      fontSize: 24,
      fontWeight: 'bold'
    },
    breadcrumb: {
      color: '#818181',
      fontWeight: 500,
      fontSize: 16
    }
  })
);

const ImageLibrary = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.header}>
        <Title className={classes.height}>
          <div className={classes.title}>Ảnh</div>
          <div className={classes.breadcrumb}>Trang chủ / Thư viện/ ảnh</div>
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
          <NewsEvent />
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default ImageLibrary;
