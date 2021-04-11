import { Container } from 'components';
import React, { Fragment } from 'react';
import {
  EventSsection,
  FeaturedSection,
  LibrarySection,
  MapSection,
  NewsSection
} from './components';

const Home = () => {
  return (
    <Fragment>
      <FeaturedSection />
      <NewsSection />
      <LibrarySection />
      <Container>
        <EventSsection />
        <MapSection />
      </Container>
    </Fragment>
  );
};

export default Home;
