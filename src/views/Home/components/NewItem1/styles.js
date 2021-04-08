import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  media: {
    height: 125
  },
  content: {
    paddingTop: 0
  },
  avatarContainer: {
    marginTop: -32,
    display: 'flex',
    justifyContent: 'center'
  },
  avatar: {
    height: 64,
    width: 64,
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: theme.palette.white
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  time: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    color: '#838383'
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    color: '#000000'
  }
}));

export default useStyles;
