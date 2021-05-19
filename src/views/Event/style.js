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
      margin: 0,
      flexGrow: 1,
      color: '#3A3A3A',
      fontSize: 24,
      fontWeight: 'bold',
      textTransform: 'uppercase'
    },
    eventList: {
      marginTop: 24,
      '& hr:last-child': {
        backgroundColor: '#ffffff',
        marginBottom: 40,
        [theme.breakpoints.down('md')]: {
          marginBottom: 24
        }
      }
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
      marginTop: '40px',
      marginBottom: '32px',
      backgroundColor: '#E5E5E5',
      [theme.breakpoints.down('md')]: {
        marginTop: '24px',
        marginBottom: '24px'
      }
    },
    firstSection: {
      marginTop: theme.spacing(2)
    },
    thumbnailEvent: {
      paddingBottom: '46%',
      borderRadius: '16px 0 0 0',
      [theme.breakpoints.down('sm')]: {
        borderRadius: '16px 16px 0 0'
      }
    },
    secondSection: {
      paddingTop: theme.spacing(6)
    },
    eventCard: {
      height: '100%',
      backgroundColor: '#FFFFFF',
      boxShadow: `0px 4px 60px 0px rgba(150, 150, 150, 0.24)`,
      borderRadius: 16,
      marginTop: theme.spacing(2)
    },
    eventLeft: {
      backgroundColor: '#92BF1F',
      borderRadius: '16px 0 0 16px',
      [theme.breakpoints.down('sm')]: {
        borderRadius: '16px 16px 0 0'
      }
    },
    eventRight: {
      backgroundColor: '#FFFFFF',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflowY: 'auto',
      borderRadius: 16,
      [theme.breakpoints.down('xs')]: {
        display: 'block'
      }
    },
    eventDetailCard: {
      backgroundColor: '#92BF1F'
    },
    imgNoEvent: {
      // width: '100%',
      // height: 250
      height: 0,
      paddingTop: '45%' // 16:9
    },
    noEventLable: {
      color: 'white',
      marginTop: theme.spacing(5),
      fontWeight: 700,
      fontSize: '24px',
      alignSelf: 'center',
      [theme.breakpoints.down('sm')]: {
        fontSize: '18px'
      }
      // position: 'absolute',
      // top: '20px',
      // left: '20px'
    },

    titleBox: {
      marginTop: 32,
      marginBottom: 32
    },
    titleContent: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      flexWrap: 'wrap'
    },
    rootCard: {
      boxShadow: `0px 4px 60px 0px rgba(150, 150, 150, 0.24)`,
      borderRadius: 16
    },

    eventTitle: {
      lineHeight: 1.25,
      color: 'white',
      marginTop: 0,
      marginBottom: theme.spacing(2),
      fontWeight: 700,
      fontSize: '24px',
      [theme.breakpoints.down('sm')]: {
        fontSize: 16
      }
    },
    root: {
      marginTop: theme.spacing(5)
    },
    dayDate: {
      fontFamily: 'Montserrat',
      fontSize: '24px',
      fontWeight: '500',
      color: '#3A3A3A',
      lineHeight: '29px'
      // position: 'absolute',
      // bottom: 0,
      // right: 0
    },
    noEvent: {
      fontFamily: 'Montserrat',
      fontSize: '20px',
      fontWeight: '700',
      color: 'black',
      lineHeight: '29px'
    },
    wrapperDayEvent: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)'
    },
    dayEvent: {
      fontSize: '72px',
      fontWeight: '700',
      color: '#ffffff',
      lineHeight: '87px'
    },
    weekday: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#ffffff',
      lineHeight: '29px'
    },
    notInThisMonthDayPaper: {
      width: '35px',
      height: '35px',
      backgroundColor: '#eeeeee',
      margin: '3px',
      boxShadow: 'none',
      borderRadius: 0,
      padding: '1px'
    },
    normalDayPaper: {
      width: '35px',
      height: '35px',
      backgroundColor: '#e8f5e9',
      margin: '3px',
      boxShadow: 'none',
      borderRadius: 0,
      padding: '1px',
      cursor: 'pointer'
    },
    selectedDayPaper: {
      width: '31px',
      height: '31px',
      backgroundColor: '#f9fbe7',
      margin: '3px',
      boxShadow: 'none',
      borderRadius: 0,
      borderStyle: 'solid',
      borderWidth: '2px',
      borderColor: 'lime',
      padding: '1px',
      cursor: 'pointer'
    },
    todayPaper: {
      width: '35px',
      height: '35px',
      backgroundColor: 'lightGreen',
      margin: '3px',
      boxShadow: 'none',
      borderRadius: 0,
      padding: '1px',
      cursor: 'pointer',
      color: ' white'
    },
    imageEvent: {
      width: '100%',
      height: '100%'
    },
    media: { width: 24, height: 24, marginRight: 10 },
    addressItem: {
      margin: 0,
      fontSize: '14px',
      fontWeight: '600',
      color: '#FFFFFF'
    },
    eventDes: {
      padding: '24px 40px',
      backgroundColor: '#92BF1F',
      [theme.breakpoints.down('sm')]: {
        padding: 16
      }
    },
    title1: {
      fontFamily: 'Montserrat',
      fontWeight: '700',
      color: '#3A3A3A'
    },
    title2: {
      fontFamily: 'Montserrat',
      fontWeight: '700',
      color: '#92BF1F',
      marginBottom: theme.spacing(2)
    },
    smTitle: {
      fontFamily: 'Montserrat',
      fontWeight: '700',
      color: '#3A3A3A',
      marginLeft: theme.spacing(2)
    },
    lgTitle: {
      fontFamily: 'Montserrat',
      fontWeight: '700',
      color: '#92BF1F',
      marginBottom: theme.spacing(2)
    }
  })
);

export default useStyles;
