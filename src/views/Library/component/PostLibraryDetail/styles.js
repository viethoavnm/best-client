import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    maxHeight: '100%', // 1000
    overflow: 'auto',
    // paddingLeft: 150,
    paddingRight: 30
  },
  inline: {
    display: 'inline'
  },
  layoutRoot: {
    marginTop: 40,
    paddingLeft: 150,
    paddingRight: 150
  },
  rightItem: {
    // paddingTop: 20,
    // paddingBottom: 20
  },
  gridSuggest: {
    marginBottom: 120,
    [theme.breakpoints.down('600')]: {
      marginBottom: 44
    }
  },
  content: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '400',
    color: '#3A3A3A',
    lineHeight: '32px',
    marginBottom: 50
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: '24px',
    fontWeight: '700',
    color: '#3A3A3A',
    lineHeight: '29px'
  },
  icSlash: { width: 16, height: 40, marginRight: 16 },
  media: { width: 24, height: 24, marginRight: 10 },
  addressItem: {
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: '500',
    color: '#92BF1F',
    lineHeight: '17px'
  },
  timeItem: {
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: '500',
    color: '#92BF1F',
    lineHeight: '17px'
  },
  monthEvent: {
    fontFamily: 'Montserrat',
    fontSize: '18px',
    fontWeight: '500',
    color: '#FFFFFF',
    lineHeight: '21px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      lineHeight: '18px'
    }
  },
  dayEvent: {
    fontFamily: 'Montserrat',
    fontSize: 36,
    fontWeight: '700',
    color: '#000000',
    lineHeight: '44px',
    marginBottom: 8
  },
  dateEvent: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    lineHeight: '20px'
  },
  header: {
    padding: '30px 0'
  },
  titleSection: {
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
  description: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 32,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 20
    }
  }
}));

export default useStyles;
