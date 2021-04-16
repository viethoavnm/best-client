import { makeStyles } from '@material-ui/styles';

export const BREAKPOINTS = 'sm';
const useStyles = makeStyles(theme => ({
  root: {
    background: `linear-gradient(90deg, #92BF1F -18.89%, #F7B033 125.73%)`,
    lineHeight: 1.25,
    zIndex: 1100,
    transition: 'padding-left 0.4s ease-out',
    [theme.breakpoints.down(BREAKPOINTS)]: {
      background: '#A1BD22'
    }
  },
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  menuMobile: {
    transition: 'width 0.4s ease-out',
    flexGrow: 1,
    overflow: 'hidden',
    [theme.breakpoints.down(BREAKPOINTS)]: {
      width: 0,
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      zIndex: 99999,
      overflow: 'auto',
      backgroundColor: '#A1BD22'
    }
  },
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.down(BREAKPOINTS)]: {
      flexDirection: 'column'
    }
  },
  li: {
    // [theme.breakpoints.down(BREAKPOINTS)]: {
    //   borderTop: '1px solid rgba(255, 255, 255, 0.32)',
    //   '&:last-child': {
    //     borderBottom: '1px solid rgba(255, 255, 255, 0.32)'
    //   }
    // }
  },
  active: {
    backgroundColor: 'rgba(255, 255, 255, 0.32)',
    pointerEvents: 'none'
  },
  a: {
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    padding: '20px 0',
    fontWeight: 600,
    fontSize: '1rem',
    color: '#ffffff',
    whiteSpace: 'nowrap',
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)'
    },
    [theme.breakpoints.down(BREAKPOINTS)]: {
      padding: '13px 15px',
      textTransform: 'initial'
    }
  },
  icon: {
    display: 'none',
    [theme.breakpoints.down(BREAKPOINTS)]: {
      display: 'inline-block',
      marginRight: 20
    }
  },
  span: {
    margin: 0,
    padding: '0px 12px',
    borderLeft: '1px solid #ffffff',
    [theme.breakpoints.down(BREAKPOINTS)]: {
      borderLeft: 'none',
      padding: 0
    }
  },
  imgBox: {
    display: 'none',
    [theme.breakpoints.down(BREAKPOINTS)]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1
    }
  },
  img: {
    height: 45
  },
  imgTopBox: {
    display: 'none',
    [theme.breakpoints.down(BREAKPOINTS)]: {
      display: 'flex'
    }
  },
  imgTop: {
    width: 194,
    margin: '20px auto'
  },
  search: {
    // padding: '10px',
    borderRadius: 0,
    color: '#ffffff',
    backgroundColor: 'rgba(255, 255, 255, 0.32)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.32)'
    }
  },
  pushmenu: {
    padding: 0,
    color: '#ffffff',
    marginRight: 15,
    display: 'none',
    [theme.breakpoints.down(BREAKPOINTS)]: {
      display: 'block'
    }
  },
  menuOpenRoot: {
    [theme.breakpoints.down(BREAKPOINTS)]: {
      paddingLeft: '80%'
    }
  },
  menuOpen: {
    [theme.breakpoints.down(BREAKPOINTS)]: {
      width: '80%'
    }
  },
  closeMenu: {
    [theme.breakpoints.down(BREAKPOINTS)]: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(43, 68, 91, 0.4)'
    }
  }
}));

export default useStyles;
