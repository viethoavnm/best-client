import { createStyles, makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme =>
  createStyles({
    large: {
      height: 48,
      '&::after': {
        right: -6
      },
      '& >:first-child': {
        width: 14
      }
    },
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      fontWeight: 600,
      fontSize: 18,
      marginBottom: 20,
      '&::after': {
        position: 'absolute',
        right: -7,
        content: '" "',
        marginLeft: '100%',
        width: 12,
        height: '100%',
        transform: 'skew(-15deg)',
        backgroundColor: '#ffffff',
        zIndex: 1,
        [theme.breakpoints.down('sm')]: {
          backgroundColor: 'transparent'
        }
      },
      [theme.breakpoints.down('sm')]: {
        backgroundColor: 'transparent',
        height: 'auto'
      }
    },
    small: {
      height: 32
    },
    decoration: {
      position: 'relative',
      width: 12,
      height: '100%',
      transform: 'skew(-15deg)',
      backgroundColor: '#92BF1F',
      left: 5,
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
      backgroundColor: '#F7F7F7',
      height: '100%',
      marginLeft: -1,
      [theme.breakpoints.down('sm')]: {
        padding: 0,
        flexDirection: 'column',
        alignItems: 'start',
        height: 'auto',
        backgroundColor: 'transparent',
        marginLeft: 0
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
const Title = ({ className, children, size = 'small', transform }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, classes[size], className)}>
      <div className={classes.decoration}></div>
      <div
        className={classes.title}
        style={{ textTransform: transform || 'initial' }}>
        {children}
      </div>
    </div>
  );
};

Title.prototypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['large', 'small'])
};

export default Title;
