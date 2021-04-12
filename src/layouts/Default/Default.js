import { LinearProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Fragment, Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import { Footer, NavBar } from './components';
import Header from './components/Header';

const Default = props => {
  const { route } = props;
  return (
    <Fragment>
      <Header />
      <NavBar />
      <main>
        <Suspense fallback={<LinearProgress />}>
          {renderRoutes(route.routes)}
        </Suspense>
      </main>
      <Footer />
    </Fragment>
  );
};

Default.propTypes = {
  route: PropTypes.object
};

export default Default;
