import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  titleBox: {
    marginTop: 32,
    marginBottom: 32
  },
  title: {
    margin: 0,
    flexGrow: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A3A3A',
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
      color: '#92BF1F'
    }
  },
  titleContent: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap'
  },
  readMore: {
    color: '#92BF1F',
    fontWeight: 500,
    display: 'flex',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    },
    [theme.breakpoints.down('md')]: {
      color: '#272727'
    },
    [theme.breakpoints.up('md')]: {
      '& svg': {
        display: 'none'
      }
    }
  },
  detailLocationView: {
    order: 2,
    [theme.breakpoints.up('sm')]: {
      order: 1
    }
  },
  mapView: {
    order: 1,
    [theme.breakpoints.up('sm')]: {
      order: 2
    }
  },
  googleMapFrame: {
    position: 'relative',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 10
  },
  titleProject: {
    fontFamily: 'Montserrat',
    fontSize: '18px',
    fontWeight: '600',
    color: '#92BF1F',
    lineHeight: '19.5px',
    marginBottom: 16
  },
  contentProject: {
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: '500',
    color: '#3A3A3A',
    lineHeight: '19.5px',
    marginBottom: 16
  },
  subTitle: {
    fontFamily: 'Montserrat',
    fontSize: '18px',
    fontWeight: '500',
    color: '#C4C4C4',
    lineHeight: '21px',
    marginBottom: 8
  },
  mapIcon: {
    fontWeight: 600,
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: '#ffffff1a'
    },
    '& .MuiButton-label': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: 12,
      textTransform: 'initial',
      color: '#ffffff'
    }
  }
}));

export default useStyles;
