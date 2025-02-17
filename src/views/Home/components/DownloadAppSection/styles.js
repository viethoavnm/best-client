import { makeStyles } from '@material-ui/styles';
import AppstoreBadge from 'assets/img/appstore-badge.svg';
import GooglePlayBadge from 'assets/img/googleplay-badge.svg';
import DownloadAppDevice from 'assets/img/download-app-device.png';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    paddingTop: '6%',
    paddingBottom: '6%',
    marginTop: theme.spacing(5),
    backgroundColor: '#EDF5F8',
    backgroundImage: `url(${DownloadAppDevice})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: '0%',
    [theme.breakpoints.down('xs')]: {
      backgroundPosition: '-80%'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      backgroundPosition: '0%'
    },
    [theme.breakpoints.between('md', 'xl')]: {
      backgroundPosition: '10%'
    },
    [theme.breakpoints.up('xl')]: {
      backgroundPosition: '28%'
    },
    [theme.breakpoints.only('sm')]: {
      backgroundPosition: '-600%'
    }
  },
  media: {
    width: '100%',
    height: '100%'
  },
  downloadContainer: {
    width: '90%',
    display: 'inline-block'
  },
  titleBox: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  title: {
    fontSize: 24,
    color: '#92BF1F',
    marginBottom: 16,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16
    }
  },
  description: {
    fontSize: 16
  },
  hideOnMobile: {
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    },
    display: 'none'
  },
  downloadButton: {
    width: '100%',
    display: 'block',
    paddingBottom: '32%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '27%'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      paddingBottom: '29%'
    },
    [theme.breakpoints.only('sm')]: {
      paddingBottom: '17%'
    }
  },
  instructionButton: {
    lineHeight: '1.5',
    fontWeight: 600,
    fontSize: 16,
    display: 'inline-block',
    padding: '18.57px 42px 18.57px 42px',
    background: '#FFFFFF',
    border: '1px solid #92BF1F',
    boxSizing: 'border-box',
    boxShadow: '0px 32px 64px -20px rgb(44 44 44 / 64%)',
    textDecoration: 'none',
    color: '#426B2F',
    borderRadius: 8,
    [theme.breakpoints.down('sm')]: {
      padding: '13px 42px 13px 42px',
      color: '#92BF1F',
      marginBottom: '30px'
    }
  },
  googleplay: {
    [theme.breakpoints.up('sm')]: {
      backgroundPosition: 'left'
    },
    backgroundPosition: 'center',
    backgroundImage: `url(${GooglePlayBadge})`
  },
  appstore: {
    [theme.breakpoints.up('sm')]: {
      backgroundPosition: 'right'
    },
    backgroundPosition: 'center',
    backgroundImage: `url(${AppstoreBadge})`
  }
}));

export default useStyles;
