import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  titleBox: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3)
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A3A3A',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    textOverflow: 'ellipsis',
    [theme.breakpoints.down('sm')]: {
      color: '#92BF1F'
    }
  },
  rightRoot: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      '& > *:first-child': {
        marginBottom: 16
      }
    },
    '& .MuiCardContent-root': {
      paddingBottom: 15
    }
  },
  rightContent: {
    padding: 15
  },
  rightTitle: {
    fontSize: 24
  },
  rightTime: {
    display: 'none'
  },
  rightTypeTop: {
    backgroundColor: '#E16C00'
  },
  rightTypeBottom: {
    backgroundColor: '#0AACC2'
  },
  rightImgTop: {
    borderRadius: 8,
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '95%'
    }
  },
  rightImgBottom: {
    borderRadius: 8,
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '58%'
    }
  }
}));

export default useStyles;
