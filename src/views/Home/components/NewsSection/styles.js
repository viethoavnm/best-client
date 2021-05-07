import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  rootCard: {
    '& .MuiCardContent-root:last-child': {
      paddingBottom: 12
    }
  },
  img: {
    height: 0,
    paddingBottom: '59%',
    borderRadius: 8
  },
  content: {
    padding: 0
  },
  title: {
    color: '#92BF1F',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    [theme.breakpoints.down('sm')]: {
      color: '#000000',
      fontSize: 16
    }
  },
  description: {
    fontSize: 16,
    color: '#3A3A3A',
    marginTop: 8,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical'
  },
  time: {
    fontSize: 16,
    fontWeight: 500,
    color: '#979797',
    display: 'flex',
    alignItems: 'center',
    marginTop: 8,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  icon: {
    marginRight: 6
  },
  timeTop: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

export default useStyles;
