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
  detailLocation: {
    order: 2,
    [theme.breakpoints.up('sm')]: {
      order: 1,
    }
  },
  detailCard: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    boxShadow: `0px 4px 60px 0px rgba(150, 150, 150, 0.24)`,
    borderRadius: 16,
  },
  detailContent: {
    padding: theme.spacing(3)
  },
  mapView: {
    order: 1,
    [theme.breakpoints.up('sm')]: {
      order: 2,
    }
  },
  root: {
    marginTop: theme.spacing(5)
  },
  content: {
    marginTop: theme.spacing(3)
  },
  slashIcon: {
    height: '100%'
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
  leftProject: {
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#FFFFFF'
  },
  calendar: {
    width: '600px'
  },
  latestNewsBox: { paddingLeft: 150, paddingRight: 150, maginTop: 50 },
  latestNewLeftBlock: {},
  latestNewRightBlock: {},
  libBlock: {},
  titleNew: {
    color: '#92BF1F',
    fontWeight: 'bold',
    fontSize: 24
  },
  timeNew: { color: '#979797', fontWeight: 'bold', fontSize: 16 },
  descriptionNew: { color: '#3A3A3A', fontWeight: 'normal', fontSize: 16 },
  titleSideNew: {
    color: '#92BF1F'
  },
  timeSideNew: {
    color: '#979797'
  },
  boldText: {
    fontWeight: 600
  },
  icSlash: { width: 16, height: 40, marginRight: 16 },
  smallClock: {
    width: 16,
    height: 16,
    marginRight: 4
  },
  timeSuggest: {
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '17px',
    color: '#ffffff'
  },
  name: {
    fontFamily: 'Montserrat',
    fontSize: '36px',
    fontWeight: '700',
    color: '#ffffff',
    lineHeight: '43px',
    marginBottom: 18
  },
  nameSmall: {
    fontFamily: 'Montserrat',
    fontSize: '24px',
    fontWeight: '700',
    color: '#ffffff',
    lineHeight: '30px'
  },
  tag: {
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: '700',
    color: '#ffffff',
    lineHeight: '17px'
  },
  name2: {
    fontFamily: 'Montserrat',
    fontSize: '24px',
    fontWeight: '700',
    color: '#92BF1F',
    lineHeight: '29px',
    marginBottom: 10,
    marginTop: 16
  },
  desc2: {
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: '400',
    color: '#3A3A3A',
    lineHeight: '19.5px'
  },
  titleProject: {
    fontFamily: 'Montserrat',
    fontSize: '18px',
    fontWeight: '600',
    color: '#92BF1F',
    lineHeight: '19.5px',
    marginBottom: 16
  },
  contentProject: {
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: '500',
    color: '#3A3A3A',
    lineHeight: '19.5px',
    marginBottom: 16
  },
  subTitle: {
    fontFamily: 'Montserrat',
    fontSize: '18px',
    fontWeight: '500',
    color: '#C4C4C4',
    lineHeight: '21px',
    marginBottom: 8
  },
  wrapperProject: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 35,
    padding: 15
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
