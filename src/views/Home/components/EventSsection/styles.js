import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  titleBox: {
    margin: 0,
    marginTop: 48,
    marginBottom: 24
  },
  title: {
    margin: 0,
    flexGrow: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A3A3A',
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
      color: '#92BF1F'
    }
  },
  titleContent: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap'
  },
  readMore: {
    color: '#92BF1F',
    fontWeight: 500,
    display: 'flex',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    },
    [theme.breakpoints.down('md')]: {
      color: '#272727'
    },
    [theme.breakpoints.up('md')]: {
      '& svg': {
        display: 'none'
      }
    }
  },
  rootCard: {
    boxShadow: `0px 4px 60px 0px rgba(150, 150, 150, 0.24)`,
    borderRadius: 16
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgNoEvent: {
    // width: '100%'
    height: 0,
    paddingTop: '45%' // 16:9
  },
  noEventLable: {
    color: 'white',
    marginTop: theme.spacing(5),
    fontWeight: 700,
    fontSize: '24px'
  },
  eventTitle: {
    lineHeight: 1.25,
    color: 'white',
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
    fontSize: '24px',
    fontWeight: '500',
    color: '#3A3A3A',
    lineHeight: '29px'
    // position: 'absolute',
    // bottom: 0,
    // right: 0
  },
  thumbnailEvent: {
    paddingBottom: '46%',
    borderRadius: '16px 0 0 0',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '16px 16px 0 0'
    }
  },
  noEvent: {
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
  dayWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
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
    [theme.breakpoints.down('sm')]: {
      padding: 16
    }
  },
  title1: {
    fontWeight: '700',
    color: '#3A3A3A'
  },
  title2: {
    fontWeight: '700',
    color: '#92BF1F',
    marginBottom: theme.spacing(2)
  },
  smTitle: {
    fontWeight: '700',
    color: '#3A3A3A',
    marginLeft: theme.spacing(2)
  },
  lgTitle: {
    fontWeight: '700',
    color: '#92BF1F',
    marginBottom: theme.spacing(2)
  },
  calanderView: {},
  borderRadius: {
    borderRadius: 16
  }
}));

export default useStyles;
