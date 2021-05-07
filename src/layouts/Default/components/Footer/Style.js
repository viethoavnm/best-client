import { makeStyles } from '@material-ui/core/styles';
import { withStyles, Typography } from '@material-ui/core';

export const CustomColor = withStyles(theme => ({
  root: {
    [theme.breakpoints.down('md')]: {
      background:
        '-webkit-linear-gradient(61.69deg, #E2A813 11.8%, #84AF0B 66.82%)',
      '-webkit-background-clip': 'text',
      WebkitTextFillColor: 'transparent'
    }
  }
}))(Typography);
const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 52,
    paddingBottom: 24,
    backgroundColor: '#FAFCF4'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  titleFooter: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#3E2C1F',
    lineHeight: '29px'
  },
  wrapperFooter: {
    paddingTop: 56,
    paddingBottom: 56
  },
  inputEmail: {
    backgroundColor: 'white',
    height: 36,
    minWidth: 280,
    color: '#999999',
    paddingLeft: 10,
    paddingRight: 10
  },
  btnEmail: {
    height: 36,
    background: '#F19101',
    paddingLeft: 15,
    paddingRight: 15
  },
  textBtnEmail: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#572F12',
    lineHeight: '16px'
  },
  textFooter: {
    fontSize: 10,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      order: 2
    }
  },
  secondFooterBlock: {
    marginTop: 16
  },
  inforRow: {
    padding: '13px 0',
    display: 'flex'
  },
  footerIcon: {
    width: 20,
    height: 20,
    marginRight: 12
  },
  footerColumnTitle: {
    fontWeight: 600,
    fontSize: 16,
    color: '#3A3A3A',
    marginTop: 8
  },
  footerColumnDes: {
    fontWeight: '400',
    color: '#3A3A3A'
  },
  footerInfoDownload: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  footerInfoDownloadSX: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      flexWrap: 'wrap'
    }
  },
  downloadAppTitle: {
    fontWeight: '600',
    color: '#7FAB0F',
    marginRight: theme.spacing(1),
    fontSize: 16
  },
  blockDownload: {
    marginTop: theme.spacing(2)
  },
  eachRowItem: {
    color: '#2C2C2C',
    marginTop: theme.spacing(2),
    display: 'block',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  smTitle: {
    fontSize: 14,
    color: '#2C2C2C'
  },
  title: {
    fontSize: 14,
    fontWeight: 600,
    color: '#3A3A3A',
    marginTop: 8
  },
  description: {
    fontSize: 14,
    color: '#3A3A3A',
    marginTop: 8
  },
  teso: {
    textAlign: 'right',
    color: '#0B0B0B',
    fontSize: 14,
    fontWeight: 500,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      order: 1,
      marginTop: 14,
      marginBottom: 7
    }
  },
  scrollToTop: {
    marginTop: 16
  },
  downloadBox: {
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginRight: 12,
    flexBasis: '50%',
    [theme.breakpoints.down('sm')]: {
      marginTop: 0
    }
  },
  sponsorBox: {
    marginTop: 24,
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      marginTop: 0
    }
  }
}));

export default useStyles;
