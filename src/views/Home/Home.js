import React, { Fragment } from 'react';
import {
  EventSsection,
  FeaturedSection,
  LibrarySection,
  MapSection,
  NewsSection,
  DownloadAppSection
} from './components';

const Home = () => {
  return (
    <Fragment>
      <FeaturedSection />
      <NewsSection />
      <LibrarySection />
      <EventSsection />
      <MapSection />
      <DownloadAppSection />
    </Fragment>
  );
};

export default Home;
