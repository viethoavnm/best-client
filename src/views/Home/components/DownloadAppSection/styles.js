import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  rootCard: {
    width: '100%',
    height: '100%',
    marginTop: theme.spacing(5)
  },
  media: {
    width: '100%',
    height: '100%'
  }
}));

export default useStyles;
