import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(89.97deg, #D7D802 0.02%, #92BF1F 99.97%)'
  },

  content: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '50px 0',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '20px 0'
    }
  },
  label: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#3E2C1F',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  input: {
    backgroundColor: '#F1F1F1',
    fontSize: 14,
    padding: '0px 13px',
    height: 36,
    borderRadius: '4px 0 0 4px',
    width: 300,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: 15,
      borderRadius: 4
    }
  },
  button: {
    backgroundColor: '#F19101',
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.05)',
    borderRadius: '0 4px 4px 0',
    '&:hover': {
      backgroundColor: '#F19101'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: 10,
      borderRadius: 4
    }
  },
  form: {
    display: 'flex',
    backgroundColor: 'transparent',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  }
}));

export default useStyles;
