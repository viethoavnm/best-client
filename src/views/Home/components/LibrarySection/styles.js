import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(3)
  },
  slashIcon: {
    height: '100%'
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    color: '#3A3A3A',
    padding: theme.spacing(2)
  },
  smTitle: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    color: '#3A3A3A',
    marginLeft: theme.spacing(2)
  },
  lgTitle: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    color: '#92BF1F',
    marginBottom: theme.spacing(2)
  }
}));

export default useStyles;
