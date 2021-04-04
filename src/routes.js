import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import DefaultLayout from './layouts/Default';
import ErrorLayout from './layouts/Error';
import Home from './views/Home';
import About from './views/About';

const routes = [
  {
    route: '*',
    component: DefaultLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/home',
        exact: true,
        component: Home
      },
      {
        path: '/about-us',
        exact: true,
        component: About
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    path: '/errors',
    component: ErrorLayout,
    routes: [
      {
        path: '/errors/error-401',
        exact: true,
        component: lazy(() => import('./views/Error401'))
      },
      {
        path: '/errors/error-404',
        exact: true,
        component: lazy(() => import('./views/Error404'))
      },
      {
        path: '/errors/error-500',
        exact: true,
        component: lazy(() => import('./views/Error500'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  }
];

export default routes;
