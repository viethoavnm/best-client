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
      // padding: '40px 0'
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
    },
    firstSection: {
      marginTop: theme.spacing(2)
    },
    secondSection: {
      marginTop: theme.spacing(2)
    },
    eventCard: {
      height: '100%',
      backgroundColor: '#FFFFFF',
      boxShadow: `0px 4px 60px 0px rgba(150, 150, 150, 0.24)`,
      borderRadius: 16,
      marginTop: theme.spacing(2)
    },
    eventLeft: {
      backgroundColor: '#92BF1F'
    },
    eventRight: {
      backgroundColor: '#FFFFFF'
    },
    eventDetailCard: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BF1F'
    },
    imgNoEvent: {
      width: '100%'
    },
    noEventLable: {
      color: 'white',
      marginTop: theme.spacing(5),
      fontWeight: 700,
      fontSize: '24px'
    },
    eventTitle: {
      color: 'white',
      marginBottom: theme.spacing(2),
      fontWeight: 700,
      fontSize: '24px'
    }
  })
);

export default useStyles;
