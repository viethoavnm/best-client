import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative'
  },
  img: {
    height: 0,
    paddingBottom: '62%',
    [theme.breakpoints.up('md')]: {
      paddingBottom: '77%'
    }
  },
  content: {
    position: 'absolute',
    bottom: 0
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
      fontSize: 24,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
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
