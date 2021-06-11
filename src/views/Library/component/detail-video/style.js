import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      marginTop: 32,
      [theme.breakpoints.down('sm')]: {
        marginTop: 24
      }
    },
    title: {
      color: '#3A3A3A',
      fontSize: 36,
      fontWeight: 'bold',
      marginBottom: 35,
      [theme.breakpoints.down('sm')]: {
        fontSize: 24,
        marginBottom: 15
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 18
      }
    },
    libraryBtn: {
      backgroundColor: '#92BF1F',
      color: '#ffffff',
      height: 24,
      whiteSpace: 'nowrap',
      marginRight: 26,
      '&:hover': {
        backgroundColor: '#92BF1F',
        color: '#ffffff'
      }
    },
    shareBox: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      marginBottom: 12,
      '& > *': {
        marginBottom: 12
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: 0
      }
    },
    description: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#000000',
      marginBottom: 32,
      [theme.breakpoints.down('sm')]: {
        marginBottom: 20
      },
      wordBreak: 'break-word'
    },
    time: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      color: '#979797'
      // marginLeft: 25
    },
    timeIcon: {
      width: 18,
      height: 18,
      marginRight: 5
    },
    video: {
      paddingBottom: '60%',
      position: 'relative',
      '& iframe': {
        position: 'absolute',
        width: '100%',
        height: '100%'
      }
    },
    author: {
      textAlign: 'right',
      fontSize: 18,
      fontWeight: 600,
      marginTop: 40
    },
    divider: {
      backgroundColor: '#E5E5E5',
      margin: '40px 0'
    },
    download: {
      marginTop: 16,
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 500,
      '& a': {
        color: '#92BF1F',
        display: 'inline-flex',
        alignItems: 'center',
        '&:hover': {
          textDecoration: 'none'
        }
      }
    }
  })
);

export default useStyles;
