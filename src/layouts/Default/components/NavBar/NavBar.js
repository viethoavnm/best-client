import { IconButton } from '@material-ui/core';
import { Menu as MenuIcon, Search } from '@material-ui/icons';
import clsx from 'clsx';
import { Container } from 'components';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { TYPE_MENU } from 'utils/constant';
import { mapIcon } from 'views/Home/components/MapSection/MapSection';
import logo from '../../../../assets/img/logo-best.png';
import Language from './Language';
import useStyles from './style';

const NavBar = () => {
  const classes = useStyles();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const menuData = useSelector(state => state.setup.menuData);
  const lang = useSelector(state => state.multiLang.lang);
  const getLink = menuItem => {
    let link = '#';
    switch (menuItem?.type) {
      case TYPE_MENU.HOME: {
        link = '/home';
        break;
      }
      case TYPE_MENU.CATEGORY: {
        link = `/category/${menuItem?.[lang]?.slug}`;
        break;
      }
      case TYPE_MENU.POST: {
        link = `/post/${menuItem?.[lang]?.slug}`;
        break;
      }
      case TYPE_MENU.EVENT: {
        link = '/event';
        break;
      }
      case TYPE_MENU.LIBRARY: {
        link = '/library';
        break;
      }
    }
    return link;
  };

  useEffect(() => {
    if (openMenu) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [openMenu]);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <nav className={classes.root}>
      <Container>
        <div className={classes.container}>
          <IconButton className={classes.pushmenu} onClick={handleOpenMenu}>
            <MenuIcon fontSize="large" />
          </IconButton>

          <div className={classes.imgBox}>
            <img className={classes.img} src={logo} alt="logo" />
          </div>

          <div
            className={clsx(classes.menuMobile, openMenu && classes.menuOpen)}>
            <div className={classes.imgTopBox}>
              <img className={classes.imgTop} src={logo} alt="logo" />
            </div>

            <ul className={classes.ul}>
              {Array.isArray(menuData) &&
                menuData.map((obj, key) => {
                  const link = getLink(obj);
                  const isSamePath = link === location.pathname;
                  return (
                    <li className={classes.li} key={key}>
                      <Link
                        to={link}
                        onClick={handleCloseMenu}
                        className={clsx(
                          classes.a,
                          isSamePath && classes.active
                        )}>
                        <span className={classes.span}>
                          {obj?.[lang]?.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>

          {openMenu && (
            <div className={classes.closeMenu} onClick={handleCloseMenu}></div>
          )}

          <div id={mapIcon}></div>
          <Link to="/search">
            <IconButton className={classes.search}>
              <Search fontSize="large" />
            </IconButton>
          </Link>

          <Language />
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
