import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import Library from 'views/Library';
import DetailVideo from 'views/Library/component/detail-video';
import DocumentLibrary from 'views/Library/component/document-library';
import ImageLibrary from 'views/Library/component/image-library';
import LibrarySubCate from 'views/Library/component/LibrarySubCate';
import PostLibrary from 'views/Library/component/post-library';
import VideoLibrary from 'views/Library/component/video-library';
import PostLibraryDetail from 'views/Library/component/PostLibraryDetail';
import FileLibraryDetail from 'views/Library/component/FileLibraryDetail';
import FileLibrary from 'views/Library/component/FileLibrary';
import AlbumLibrary from 'views/Library/component/album-library';
import DefaultLayout from './layouts/Default';
import ErrorLayout from './layouts/Error';
import Event from './views/Event';

export const libraryPath = '/library';

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
        path: '/category/:id',
        exact: true,
        component: lazy(() => import('./views/News'))
      },
      {
        path: libraryPath,
        exact: true,
        component: Library
      },
      {
        path: `${libraryPath}/:type`,
        exact: true,
        component: LibrarySubCate
      },
      {
        path: `${libraryPath}/news/:id`,
        exact: true,
        component: PostLibraryDetail
      },
      {
        path: `${libraryPath}/video/:id`,
        exact: true,
        component: PostLibraryDetail
      },
      {
        path: `${libraryPath}/image/:id`,
        exact: true,
        component: AlbumLibrary
      },
      {
        path: `${libraryPath}/file/:id`,
        exact: true,
        component: FileLibrary
      },
      {
        path: `${libraryPath}/file/:id/:indexUrl`,
        exact: true,
        component: FileLibraryDetail
      },
      // {
      //   path: '/library/video/:id',
      //   exact: true,
      //   component: DetailVideo
      // },
      {
        path: '/event',
        exact: true,
        component: Event
      },
      {
        path: '/event/:id',
        exact: true,
        component: React.lazy(() => import('./views/Event/EventDetail'))
      },
      {
        path: '/post/:id',
        exact: true,
        component: React.lazy(() => import('./views/Post/index.js'))
      },
      {
        path: '/news',
        exact: true,
        component: React.lazy(() => import('./views/News'))
      },
      {
        path: '*',
        component: lazy(() => import('./views/Error404'))
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
