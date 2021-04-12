import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import Library from 'views/Library';
import DetailVideo from 'views/Library/component/detail-video';
import DocumentLibrary from 'views/Library/component/document-library';
import ImageLibrary from 'views/Library/component/image-library';
import PostLibrary from 'views/Library/component/post-library';
import VideoLibrary from 'views/Library/component/video-library';
import DefaultLayout from './layouts/Default';
import ErrorLayout from './layouts/Error';
import Event from './views/Event';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/home" />
  },
  {
    route: '*',
    component: DefaultLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: lazy(() => import('./views/Home'))
      },
      {
        path: '/home',
        exact: true,
        component: lazy(() => import('./views/Home'))
      },
      {
        path: '/search',
        exact: true,
        component: lazy(() => import('./views/Search'))
      },
      {
        path: '/library',
        exact: true,
        component: Library
      },
      {
        path: '/library/image',
        exact: true,
        component: ImageLibrary
      },
      {
        path: '/library/video',
        exact: true,
        component: VideoLibrary
      },
      {
        path: '/library/post',
        exact: true,
        component: PostLibrary
      },
      {
        path: '/library/document',
        exact: true,
        component: DocumentLibrary
      },
      {
        path: '/library/video/detail',
        exact: true,
        component: DetailVideo
      },
      {
        path: '/event',
        exact: true,
        component: Event
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
