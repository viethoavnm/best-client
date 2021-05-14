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
  thumbnailSuggest: {
    height: 160,
    borderRadius: 10,
    marginBottom: 8
  },
  rightItem: {
    // paddingTop: 20,
    // paddingBottom: 20
  },
  dynamicContentDiv: {
    overflowX: 'hidden'
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
  titlePost: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#3A3A3A',
    marginTop: 0,
    marginBottom: 32,
    lineHeight: 1.25,
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
      marginBottom: 24
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
      marginBottom: 12
    }
  },
  author: {
    fontSize: 14,
    fontWeight: 500,
    color: '#000000',
    textAlign: 'right',
    marginTop: 32
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
    marginTop: 48,
    marginBottom: 32,
    [theme.breakpoints.down('sm')]: {
      marginTop: 36,
      marginBottom: 18
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 24,
      marginBottom: 12
    }
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
  }
}));

export default useStyles;
