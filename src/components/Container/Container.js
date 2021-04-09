import ContainerUI from '@material-ui/core/Container';
import { withStyles } from '@material-ui/styles';

const Container = withStyles({
  root: {}
})(props => {
  return <ContainerUI {...props} />;
});

export default Container;
