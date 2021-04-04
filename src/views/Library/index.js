import { Divider, Grid } from '@material-ui/core';
import { LibraryCard, Title } from 'components';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NewsEvent from '../Search/component/news-event';
import useStyles from './style';

const Library = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.header}>
        <Title className={classes.height}>
          <div className={classes.title}>Thư viện</div>
          <div className={classes.breadcrumb}>Trang chủ / Thư viện</div>
        </Title>
      </div>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <div className={classes.typeBox}>
            <div className={classes.type}>ẢNH</div>
            <Link to="/" className={classes.readMore}>
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
            <Link to="/" className={classes.readMore}>
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
            <Link to="/" className={classes.readMore}>
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
            <Link to="/" className={classes.readMore}>
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
        </Grid>
        <Grid item xs={12} md={4} className={classes.rightSidebar}>
          <NewsEvent />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Library;
