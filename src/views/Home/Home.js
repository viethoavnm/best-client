import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Page } from 'components';

import {
  FeaturedSection,
  NewsSection,
  LibrarySection,
  EventSsection,
  MapSection
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="Home">
      <FeaturedSection />
      <NewsSection />
      <LibrarySection />
      <EventSsection />
      <MapSection />
    </Page>
  );
};

export default Home;
