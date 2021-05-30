import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme =>
  createStyles({
    rightSidebar: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block'
      }
    },
    header: {
      marginTop: 32,
      marginBottom: 32
    },
    title: {
      flexGrow: 1,
      color: '#3A3A3A',
      fontSize: 24,
      fontWeight: 'bold',
      textTransform: 'uppercase'
    },
    breadcrumb: {
      color: '#818181',
      fontWeight: 500,
      fontSize: 16
    },
    typeBox: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 24
    },
    type: {
      flexGrow: 1,
      color: '#000000',
      fontWeight: 600,
      fontSize: 24,
      textTransform: 'uppercase'
    },
    readMore: {
      textDecoration: 'none',
      color: '#92BF1F',
      fontSize: 19,
      cursor: 'pointer'
    },
    divider: {
      marginTop: 32,
      marginBottom: 48,
      backgroundColor: '#E5E5E5'
    }
  })
);

export default useStyles;
