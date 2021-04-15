import { LinearProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Fragment, Suspense, useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import { Footer, NavBar } from './components';
import Header from './components/Header';
import { fetchMenuWeb, fetchHomeData } from '../../reducers/setupSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNewArticle, fetNewEvent } from 'reducers/rightBarSlice';

const Default = props => {
  const { route } = props;
  // const menuData = useSelector(state => state.setup.menu);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenuWeb());
    dispatch(fetchHomeData());
    dispatch(fetchNewArticle());
    dispatch(fetNewEvent());
  }, []);

  return (
    <Fragment>
      <Header />
      <NavBar />

      <main>
        <div style={{ minHeight: '100vh' }}>
          <Suspense fallback={<LinearProgress />}>
            {renderRoutes(route.routes)}
          </Suspense>
        </div>
      </main>

      <Footer />
    </Fragment>
  );
};

Default.propTypes = {
  route: PropTypes.object
};

export default Default;
