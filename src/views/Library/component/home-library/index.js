import { createStyles, Divider, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { LibraryCard } from 'components';
import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
    },
    typeBox: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 15
    },
    type: {
      flexGrow: 1,
      color: '#000000',
      fontWeight: 600,
      fontSize: 24
    },
    readMore: {
      color: '#92BF1F',
      fontSize: 19
    },
    divider: {
      margin: '25px 0',
      backgroundColor: '#8197A0'
    }
  })
);
const HomeLibrary = () => {
  const classes = useStyles();
  const location = useLocation();
  let pathname = location?.pathname === '/' ? '' : location.pathname;
  return (
    <Fragment>
      <div className={classes.typeBox}>
        <div className={classes.type}>ẢNH</div>
        <Link to={`${pathname}/image`} className={classes.readMore}>
          Xem thêm
        </Link>
      </div>
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
      <Divider className={classes.divider} />
      <div className={classes.typeBox}>
        <div className={classes.type}>VIDEO</div>
        <Link to={`${pathname}/video`} className={classes.readMore}>
          Xem thêm
        </Link>
      </div>
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
      <Divider className={classes.divider} />
      <div className={classes.typeBox}>
        <div className={classes.type}>THÔNG CÁO BÁO CHÍ</div>
        <Link to={`${pathname}/post`} className={classes.readMore}>
          Xem thêm
        </Link>
      </div>
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
      <Divider className={classes.divider} />
      <div className={classes.typeBox}>
        <div className={classes.type}>TÀI LIỆU</div>
        <Link to={`${pathname}/document`} className={classes.readMore}>
          Xem thêm
        </Link>
      </div>
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
    </Fragment>
  );
};

export default HomeLibrary;
