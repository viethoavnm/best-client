import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  thumbnailSuggest: {
    height: 160,
    borderRadius: 10,
    marginBottom: 8
  },
  gridSuggest: {
    '& > div': {
      [theme.breakpoints.down('601')]: {
        borderBottom: '1px solid #E5E5E5',
        paddingTop: 20,
        paddingBottom: 20
      }
    },
    '&:last-child > div': {
      [theme.breakpoints.down('601')]: {
        borderBottom: 'none !important'
      }
    }
  },
  boxSuggest: {
    [theme.breakpoints.down('600')]: {
      display: 'grid',
      gridTemplateColumns: `${(272 * 100) / 600}vw auto`,
      gridColumnGap: 12
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
    lineHeight: '17px'
  },
  titleItemSuggest: {
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: '600',
    color: '#000000',
    lineHeight: '20px',
    marginBottom: 8,
    height: 37,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordWrap: 'break-word'
  }
}));

export default useStyles;
