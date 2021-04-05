import { Box, createStyles, makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { Share } from '@material-ui/icons';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      height: 40
    },
    shareBox: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#EBF2DA',
      borderRadius: 4,
      marginRight: 20,
      '& .MuiButtonBase-root': {
        padding: 4,
        minWidth: 'auto',
        backgroundColor: '#EBF2DA',
        color: '#3A3A3A',
        '&:last-child': {
          marginRight: 20
        },
        '&:hover': {
          backgroundColor: 'rgba(38, 50, 56, 0.04)'
        }
      }
    },
    share: {
      height: 40,
      width: 40,
      borderRadius: '50%',
      backgroundColor: '#92BF1F',
      color: '#ffffff',
      position: 'absolute',
      right: 0,
      '&:hover': {
        backgroundColor: '#92BF1F'
      }
    }
  })
);

const ShareSocial = ({ children }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.shareBox}>{children}</Box>
      <IconButton className={classes.share}>
        <Share />
      </IconButton>
    </Box>
  );
};

export default ShareSocial;
