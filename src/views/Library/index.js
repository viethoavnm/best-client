import { Grid } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Title } from 'components';
import { Fragment } from 'react';
import { Route, Switch, useLocation } from 'react-router';
import NewsEvent from '../Search/component/news-event';
import DocumentLibrary from './component/document-library';
import HomeLibrary from './component/home-library';
import ImageLibrary from './component/image-library';
import PostLibrary from './component/post-library';
import VideoLibrary from './component/video-library';
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

const Library = () => {
  const classes = useStyles();
  const location = useLocation();
  let pathname = location?.pathname === '/' ? '' : location.pathname;
  return (
    <Fragment>
      <div className={classes.header}>
        <Title className={classes.height}>
          <div className={classes.title}>THƯ VIỆN</div>
          <div className={classes.breadcrumb}>Trang chủ / Thư viện</div>
        </Title>
      </div>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Switch>
            <Route path={pathname} exact>
              <HomeLibrary />
            </Route>
            <Route path={`${pathname}/image`} exact>
              <ImageLibrary />
            </Route>
            <Route path={`${pathname}/video`} exact>
              <VideoLibrary />
            </Route>
            <Route path={`${pathname}/post`} exact>
              <PostLibrary />
            </Route>
            <Route path={`${pathname}/document`} exact>
              <DocumentLibrary />
            </Route>
          </Switch>
        </Grid>
        <Grid item xs={12} md={4} className={classes.rightSidebar}>
          <NewsEvent />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Library;
