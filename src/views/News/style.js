import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme =>
  createStyles({
    rightSidebar: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block'
      }
    },
    header: {
      padding: '40px 0'
    },
    title: {
      flexGrow: 1,
      color: '#3A3A3A',
      fontSize: 24,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      [theme.breakpoints.down('sm')]: {
        color: '#92BF1F'
      }
    },
    breadcrumb: {
      color: '#818181',
      fontWeight: 500,
      fontSize: 16
    },
    secondSection: {
      marginBottom: 65,
      fontFamily: 'Montserrat'
    },
    cardSection: {
      marginBottom: 65
    },
    cardBox: {
      [theme.breakpoints.down('xs')]: {
        marginBottom: 20
      },
      '&:last-child >div': {
        borderBottom: 'none !important'
      }
    },
    cardItem: {
      boxShadow: '0px 4px 16px rgb(0 0 0 / 4%)',
      [theme.breakpoints.down('xs')]: {
        boxShadow: 'none',
        borderBottom: '1px solid #CECECE',
        borderRadius: 'none'
      }
    },
    imageItem: {
      minHeight: 149
    },
    btnMore: {
      textAlign: 'center',
      borderBottom: '1px solid #CECECE'
    },
    more: {
      background: '#DEDEDE',
      boxShadow: '0px 18.0769px 36.1538px rgba(96, 130, 150, 0.1)',
      borderRadius: 4,
      fontWeight: 500,
      fontSize: 14,
      textRransform: 'uppercase',
      color: '#616161',
      display: 'none',
      margin: 'auto auto -17px',
      lineHeight: 'initial',
      padding: 10,
      [theme.breakpoints.down('sm')]: {
        display: 'block'
      }
    }
  })
);

export default useStyles;
