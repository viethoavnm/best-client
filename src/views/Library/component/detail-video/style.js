import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      color: '#3A3A3A',
      fontSize: 36,
      fontWeight: 'bold',
      marginBottom: 35
    },
    libraryBtn: {
      backgroundColor: '#92BF1F',
      color: '#ffffff',
      height: 24,
      '&:hover': {
        backgroundColor: '#92BF1F',
        color: '#ffffff'
      }
    },
    shareBox: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 35
    },
    time: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      color: '#979797',
      marginLeft: 25
    },
    timeIcon: {
      width: 18,
      height: 18,
      marginRight: 5
    },
    video: {
      paddingBottom: '60%',
      position: 'relative',
      marginBottom: 40,
      '& iframe': {
        position: 'absolute',
        width: '100%',
        height: '100%'
      }
    },
    author: {
      textAlign: 'right',
      fontSize: 18,
      fontWeight: 600
    },
    divider: {
      backgroundColor: '#E5E5E5',
      margin: '40px 0'
    }
  })
);

export default useStyles;
