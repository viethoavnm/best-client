import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  thumbnailSuggest: {
    paddingBottom: '59%',
    borderRadius: 8
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
    display: 'block',
    textDecoration: 'none',
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
    fontSize: '16px',
    fontWeight: '600',
    color: '#000000',
    lineHeight: 1.5,
    marginBottom: 8,
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordWrap: 'break-word',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 2,
    [theme.breakpoints.down('sm')]: {
      '-webkit-line-clamp': 3
    }
  }
}));

export default useStyles;
