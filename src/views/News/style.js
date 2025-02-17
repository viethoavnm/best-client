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
      marginTop: 32,
      marginBottom: 32
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
      display: 'none',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
        marginTop: 24,
        textAlign: 'center',
        borderBottom: '1px solid #CECECE'
      },
      [theme.breakpoints.down('sx')]: {
        marginTop: 0
      }
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
