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
    flexGrow: 1,
    paddingLeft: 150,
    paddingRight: 150
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  titleFooter: {
    fontFamily: 'Montserrat',
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
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: '500',
    color: '#572F12',
    lineHeight: '16px'
  },
  secondFooterBlock: {
    padding: theme.spacing(3),
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'center'
    },
    [theme.breakpoints.down('md')]: {
      borderTop: '1px solid #D3D3D3',
      marginTop: 24,
      textAlign: 'center'
    }
  },
  secondFooterItem: {
    [theme.breakpoints.down('md')]: {
      '&:first-child': {
        order: 2
      },
      '&:nth-child(2)': {
        order: 1
      },
      '&:nth-child(2) p': {
        fontSize: 16
      }
    }
  },
  inforRow: {
    pading: theme.spacing(1)
  },
  footerIcon: {
    width: 20,
    height: 20,
    marginRight: theme.spacing(1)
  },
  footerColumnTitle: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    color: '#3A3A3A'
  },
  footerColumnDes: {
    fontFamily: 'Montserrat',
    fontWeight: '400',
    color: '#3A3A3A'
  },
  footerInfoDownload: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  footerInfoDownloadSX: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      margin: 16,
      justifyContent: 'space-between'
    }
  },
  downloadAppTitle: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    color: '#7FAB0F',
    marginRight: theme.spacing(1)
  },
  blockDownload: {
    marginTop: theme.spacing(2)
  },
  columnContent: {
    fontFamily: 'Montserrat'
  },
  eachRowItem: {
    ffontFamily: 'Montserrat',
    fontWeight: '400',
    color: '#3A3A3A',
    marginTop: theme.spacing(1),
    display: 'block'
  },
  footerItem: {
    [theme.breakpoints.down('md')]: {
      '&:first-child': {
        order: 1,
        textAlign: 'center'
      },
      '&:nth-child(2)': {
        order: '3 !important'
      },
      '&:nth-child(3)': {
        order: '2 !important'
      },
      '&:nth-child(4)': {
        order: 4
      },
      '&:nth-child(5)': {
        order: 5
      }
    },
    [theme.breakpoints.down('sm')]: {
      '&:nth-child(2)': {
        order: 2
      },
      '&:nth-child(3)': {
        order: 3
      }
    }
  },
  smTitle: {
    marginTop: theme.spacing(1),
    fontSize: 13,
    color: '#2C2C2C'
  }
}));

export default useStyles;
