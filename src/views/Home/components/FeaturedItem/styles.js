import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative'
  },
  img: {
    height: 0,
    paddingBottom: '62%',
    borderRadius: 8,
    [theme.breakpoints.up('md')]: {
      paddingBottom: '77%'
    }
  },
  content: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '0 0 8px 8px',
    backgroundImage:
      'linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 99.99%, rgba(0, 0, 0, 0) 100%)'
  },
  type: {
    color: '#ffffff',
    fontWeight: 600,
    fontSize: 14,
    textTransform: 'uppercase',
    backgroundColor: '#F7B033',
    padding: '3px 15px',
    borderRadius: 4
  },
  title: {
    marginTop: 15,
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 36,
    lineHeight: 1.25,
    [theme.breakpoints.down('md')]: {
      fontSize: 24
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 18
    }
  },
  time: {
    color: '#ACB5BB',
    fontSize: 16,
    display: 'flex',
    alignItems: 'center',
    marginTop: 15
  },
  icon: {
    marginRight: 6
  }
}));

export default useStyles;
