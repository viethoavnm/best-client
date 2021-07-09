import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 60,
    [theme.breakpoints.down('sm')]: {
      marginTop: 24
    }
  },
  bg: {
    backgroundRepeat: 'no-repeat'
  },
  border: {
    backgroundImage: 'linear-gradient(to right, #E2A813, #84AF0B)',
    borderRadius: 16,
    padding: 2,
    marginBottom: 60,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 24
    }
  },
  form: {
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 32px 64px -24px rgba(0, 0, 0, 0.16)',
    borderRadius: 16,
    padding: '32px 24px'
  },
  title: {
    color: '#F19101',
    fontWeight: 600,
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    '&:not(:last-child)': {
      marginBottom: 16
    }
  },
  label: {
    fontWeight: 500,
    flexBasis: 110,
    flexShrink: 0
  },
  input: {
    borderRadius: 4,
    padding: '7px 12px',
    width: '100%',
    outline: 'none',
    border: '1px solid #C4C4C4',
    fontSize: 14,
    fontFamily: "'Montserrat'"
  },
  textarea: {
    width: '100%',
    borderRadius: 4,
    outline: 'none',
    border: '1px solid #C4C4C4',
    padding: '7px 12px',
    fontSize: 14,
    resize: 'vertical',
    fontFamily: "'Montserrat'"
  },
  btn: {
    backgroundColor: '#F19101',
    color: '#ffffff',
    padding: '6px 48px',
    '&:hover': {
      backgroundColor: '#F19101',
      color: '#ffffff'
    }
  }
}));

export default useStyles;
