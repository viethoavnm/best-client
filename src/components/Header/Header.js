import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import useStyles from './Style';

const Header = ({ logo, logoAltText, toggleDrawer }) => {
  const classes = useStyles();

  const handleDrawerToggle = () => {
    toggleDrawer();
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Hidden mdDown>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
      </Hidden>

      <Hidden lgUp>
        <IconButton color="inherit" onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
      </Hidden>
    </AppBar>
  );
};

Header.prototypes = {
  logo: PropTypes.string,
  logoAltText: PropTypes.string
};

export default Header;
