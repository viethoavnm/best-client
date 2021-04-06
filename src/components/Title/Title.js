import { createStyles, makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#F7F7F7',
      height: 32,
      fontWeight: 600,
      fontSize: 18,
      '&::after': {
        position: 'absolute',
        right: -7,
        content: '" "',
        marginLeft: '100%',
        width: 12,
        height: '100%',
        transform: 'skew(-15deg)',
        backgroundColor: '#ffffff',
        zIndex: 1
      },
      [theme.breakpoints.down('sm')]: {
        backgroundColor: 'transparent',
        height: 'auto'
      }
    },
    decoration: {
      position: 'relative',
      width: 12,
      height: '100%',
      transform: 'skew(-15deg)',
      backgroundColor: '#92BF1F',
      left: 5,
      '&::after': {
        position: 'absolute',
        content: '" "',
        marginLeft: '100%',
        width: 12,
        height: '100%',
        backgroundColor: '#F7F7F7',
        [theme.breakpoints.down('sm')]: {
          content: ''
        }
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    title: {
      flexGrow: 1,
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      padding: '0 20px',
      color: '#92BF1F',
      [theme.breakpoints.down('sm')]: {
        padding: 0,
        flexDirection: 'column',
        alignItems: 'start'
      },
      '& > div:first-child': {
        [theme.breakpoints.down('sm')]: {
          order: 2,
          marginTop: 10
        }
      }
    }
  })
);
const Title = ({ className, children }) => {
  const classes = useStyles();
  return (
    <div className={[classes.root, className].join(' ')}>
      <div className={classes.decoration}></div>
      <div className={classes.title}>{children}</div>
    </div>
  );
};

export default Title;
