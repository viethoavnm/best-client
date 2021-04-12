import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  titleBox: {
    marginTop: 40,
    marginBottom: 25
  },
  title: {
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
    height: '100%',
    backgroundColor: '#FFFFFF',
    boxShadow: `0px 4px 60px 0px rgba(150, 150, 150, 0.24)`,
    borderRadius: 16
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
    backgroundColor: '#92BF1F',
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
  thumbnailEvent: {
    width: '100%',
    height: 232
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
    fontFamily: 'Montserrat',
    fontSize: '72px',
    fontWeight: '700',
    color: '#ffffff',
    lineHeight: '87px'
  },
  weekday: {
    fontFamily: 'Montserrat',
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
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: '500',
    color: '#FFFFFF',
    lineHeight: '17px'
  },
  eventDes: {
    backgroundColor: '#92BF1F',
    height: '50%',
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 30,
    paddingBottom: 30
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
}));

export default useStyles;
