import { Pagination as PaginationUI } from '@material-ui/lab';
import { withStyles } from '@material-ui/styles';

const Pagination = withStyles({
  root: {
    padding: '30px 0',
    backgroundColor: '#ffffff',
    '& .MuiPaginationItem-page[aria-label="Go to next page"],.MuiPaginationItem-page[aria-label="Go to previous page"]': {
      border: '1px solid #92BF1F',
      color: '#92BF1F'
    },
    '& .MuiPaginationItem-page.Mui-disabled': {
      color: '#C4C4C4',
      backgroundColor: '#F6F6F6',
      borderColor: '#E5E5E5'
    },
    '& .MuiPaginationItem-page': {
      color: '#C4C4C4',
      height: 32,
      minWidth: 32,
      fontSize: 16
    },
    '& .Mui-selected': {
      pointerEvents: 'none',
      fontWeight: 600,
      color: '#3A3A3A',
      backgroundColor: 'transparent'
    }
  }
})(props => {
  return <PaginationUI shape="rounded" size="small" {...props} />;
});

export default Pagination;
