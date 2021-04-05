import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    marginTop: theme.spacing(3)
  },
  slashIcon: {
    height: '100%'
  },
  title1: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    color: '#3A3A3A',
    padding: theme.spacing(2)
  },
  title2: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    color: '#92BF1F',
    padding: theme.spacing(2)
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
  title: {
    fontFamily: 'Montserrat',
    fontSize: '24px',
    fontWeight: '700',
    color: '#3A3A3A',
    lineHeight: '29px'
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
  }
}));

export default useStyles;
