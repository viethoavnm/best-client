import ErrorIcon from '@material-ui/icons/ErrorOutline';
import HomeIcon from '@material-ui/icons/HomeOutlined';

export default [
  {
    title: 'Pages',
    pages: [
      {
        title: 'Home',
        href: '/home',
        icon: HomeIcon
      },
      {
        title: 'Errors',
        href: '/errors',
        icon: ErrorIcon,
        children: [
          {
            title: 'Error 401',
            href: '/errors/error-401'
          },
          {
            title: 'Error 404',
            href: '/errors/error-404'
          },
          {
            title: 'Error 500',
            href: '/errors/error-500'
          }
        ]
      }
    ]
  }
];
