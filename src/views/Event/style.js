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
      padding: '40px 0'
    },
    title: {
      flexGrow: 1,
      color: '#3A3A3A',
      fontSize: 24,
      fontWeight: 'bold',
      textTransform: 'uppercase'
    },
    eventList: {
      marginTop: '24px'
    },
    event: {
      paddingTop: '0px',
      paddingBottom: '0px'
    },
    breadcrumb: {
      color: '#818181',
      fontWeight: 500,
      fontSize: 16
    },
    typeBox: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 15
    },
    type: {
      flexGrow: 1,
      color: '#000000',
      fontWeight: 600,
      fontSize: 24
    },
    readMore: {
      color: '#92BF1F',
      fontSize: 19
    },
    divider: {
      [theme.breakpoints.up('md')]: {
        marginTop: '40px',
        marginBottom: '32px'
      },
      [theme.breakpoints.down('md')]: {
        marginTop: '33px',
        marginBottom: '21px'
      },
      backgroundColor: '1px solid #E5E5E5'
    }
  })
);

export default useStyles;
