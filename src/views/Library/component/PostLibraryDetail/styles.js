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
  content: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '400',
    color: '#3A3A3A',
    lineHeight: '32px',
    marginBottom: 50
  },
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
  },
  author: {
    fontSize: 14,
    fontWeight: 500,
    color: '#000000',
    textAlign: 'right',
    marginTop: 32
  },
  divider: {
    marginTop: 24,
    marginBottom: 12
  }
}));

export default useStyles;
