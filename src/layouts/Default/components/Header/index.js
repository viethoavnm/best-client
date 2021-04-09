import { makeStyles } from '@material-ui/core';
import { Container } from 'components';
import logo from '../../../../assets/img/logo-best.svg';
import { BREAKPOINTS } from '../NavBar/style';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    [theme.breakpoints.down(BREAKPOINTS)]: {
      display: 'none'
    }
  },
  logo: {
    width: 194
  },
  title: {
    background: '-webkit-linear-gradient(0deg, #E2A813, #84AF0B)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    fontSize: 25,
    fontWeight: 600,
    whiteSpace: 'nowrap',
    marginLeft: 15,
    textTransform: 'uppercase'
  },
  divider: {
    background: 'linear-gradient(#E2A813, #84AF0B)',
    width: 3,
    height: 45,
    margin: '0 15px'
  },
  description: {
    color: '#3E230F',
    fontSize: 15
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <header>
      <Container>
        <div className={classes.root}>
          <img className={classes.logo} src={logo} alt="logo" />
          <div className={classes.title}>Công nghệ khí hóa sinh khối</div>
          <div className={classes.divider}></div>
          <div className={classes.description}>
            Giải pháp năng lượng bền vững cho chế biến nông sản và quản lý chất
            thải ở nông thôn Việt Nam
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
