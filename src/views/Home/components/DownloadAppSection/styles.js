import { makeStyles } from '@material-ui/styles';
import AppstoreBadge from 'assets/img/appstore-badge.svg';
import GooglePlayBadge from 'assets/img/googleplay-badge.svg';
import DownloadAppDevice from 'assets/img/download-app-device.png';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    paddingTop: '10%',
    paddingBottom: '10%',
    marginTop: theme.spacing(5),
    backgroundColor: '#EDF5F8',
    backgroundImage: `url(${DownloadAppDevice})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: '0%',
    [theme.breakpoints.down('xs')]: {
      backgroundPosition: '-110%'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      backgroundPosition: '-1900%'
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
    paddingBottom: '29%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '29%'
    },
    [theme.breakpoints.between('sm', 'md')]: {
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
    boxShadow: '0px 32px 64px -24px rgba(44, 44, 44, 0.16)',
    textDecoration: 'none',
    color: '#426B2F',
    borderRadius: 8,
    [theme.breakpoints.down('sm')]: {
      padding: '13px 42px 13px 42px',
      color: '#92BF1F'
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
