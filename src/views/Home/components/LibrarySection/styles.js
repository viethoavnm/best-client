import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  titleBox: {
    marginTop: 48,
    marginBottom: 24
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
  content: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  img: {
    paddingBottom: '100%',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '62%'
    }
  },
  imgBottom: {
    paddingBottom: '100%',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '89%'
    }
  },
  type: {
    display: 'none'
  },
  titleCard: {
    fontSize: 24
  },
  time: {
    color: '#979797',
    fontSize: 14,
    fontWeight: 'normal'
  },
  titleMobile: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 8,
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

export default useStyles;
