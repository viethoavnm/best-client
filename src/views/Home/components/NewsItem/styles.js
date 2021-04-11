import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiCardContent-root:last-child': {
      paddingBottom: 0
    }
  },
  img: {
    height: 0,
    paddingBottom: '68%',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '62%'
    }
  },
  contentBox: {
    display: 'flex',
    alignItems: 'center'
  },
  content: {
    padding: 0
  },
  type: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 8,
    color: '#92BF1F',
    fontWeight: 500,
    fontSize: 14,
    textTransform: 'uppercase',
    '& > span': {
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    }
  },
  title: {
    marginBottom: 8,
    color: '#000000',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 1.25,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical'
  },
  time: {
    color: '#ACB5BB',
    fontSize: 14,
    fontWeight: 500,
    display: 'inline-flex',
    alignItems: 'center',
    margin: '0 4px'
  },
  icon: {
    marginRight: 6,
    width: 18,
    height: 18
  },
  hiddenTime: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));

export default useStyles;
