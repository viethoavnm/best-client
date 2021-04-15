import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    maxHeight: '100%', // 1000
    overflow: 'auto',
    // paddingLeft: 150,
    paddingRight: 30
  },
  inline: {
    display: 'inline'
  },
  layoutRoot: {
    marginTop: 40,
    paddingLeft: 150,
    paddingRight: 150
  },
  thumbnailSuggest: {
    width: `${(272 * 100) / 1440}vw`,
    height: 160,
    borderRadius: 10,
    marginBottom: 8,
    [theme.breakpoints.down('767')]: {
      width: `${(272 * 100) / 767}vw`
    },
    [theme.breakpoints.down('601')]: {
      width: `${(272 * 100) / 600}vw`,
      marginBottom: 0
    }
  },
  thumbnail: {
    height: 0,
    paddingTop: '51.6%',

    // width: `${(752 * 100) / 1440}vw`,
    // height: 388,
    borderRadius: 8,
    marginRight: 30
  },
  divider: {
    marginTop: 30,
    marginBottom: 30
  },
  listItem: {
    padding: 0,
    marginBottom: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    boxShadow: '0px 4px 60px rgba(150, 150, 150, 0.13);'
  },
  rightItem: {
    // paddingTop: 20,
    // paddingBottom: 20
  },
  listSuggest: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    marginBottom: 44,
    [theme.breakpoints.down('767')]: {
      flexWrap: 'wrap'
    }
  },
  itemSuggest: {
    [theme.breakpoints.down('768')]: {
      justifyContent: 'center'
    },
    [theme.breakpoints.down('601')]: {
      justifyContent: 'initial'
    }
  },
  gridSuggest: {
    '& > li': {
      [theme.breakpoints.down('601')]: {
        borderBottom: '1px solid #E5E5E5',
        paddingTop: 20,
        paddingBottom: 20
      }
    },
    '&:last-child > li': {
      [theme.breakpoints.down('601')]: {
        borderBottom: 'none !important'
      }
    }
  },
  titleItem: {
    marginTop: 3,
    fontFamily: 'Montserrat',
    fontSize: '24px',
    fontWeight: '700',
    color: '#3A3A3A',
    lineHeight: '29px',
    marginBottom: 30
  },
  smallClock: {
    width: 16,
    height: 16,
    marginRight: 4
  },
  timeSuggest: {
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: '500',
    color: '#979797',
    lineHeight: '17px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2)
    }
  },
  boxSuggest: {
    [theme.breakpoints.down('600')]: {
      display: 'grid',
      gridTemplateColumns: `${(272 * 100) / 600}vw auto`,
      gridColumnGap: 12
    }
  },
  titleItemSuggest: {
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: '600',
    color: '#000000',
    lineHeight: '19px',
    marginBottom: 8,
    height: 40,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordWrap: 'break-word'
  },
  content: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '400',
    color: '#3A3A3A',
    lineHeight: '32px',
    marginBottom: 50
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: '24px',
    fontWeight: '700',
    color: '#3A3A3A',
    lineHeight: '29px'
  },
  icSlash: { width: 16, height: 40, marginRight: 16 },
  media: { width: 24, height: 24, marginRight: 10 },
  addressItem: {
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: '500',
    color: '#92BF1F',
    lineHeight: '17px'
  },
  timeItem: {
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: '500',
    color: '#92BF1F',
    lineHeight: '17px'
  },
  monthEvent: {
    fontFamily: 'Montserrat',
    fontSize: '18px',
    fontWeight: '500',
    color: '#FFFFFF',
    lineHeight: '21px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      lineHeight: '18px'
    }
  },
  dayEvent: {
    fontFamily: 'Montserrat',
    fontSize: 36,
    fontWeight: '700',
    color: '#000000',
    lineHeight: '44px',
    marginBottom: 8
  },
  dateEvent: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    lineHeight: '20px'
  }
}));

export default useStyles;
