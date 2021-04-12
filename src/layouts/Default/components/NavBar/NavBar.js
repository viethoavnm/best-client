import { IconButton } from '@material-ui/core';
import { Home, Menu as MenuIcon, Search } from '@material-ui/icons';
import clsx from 'clsx';
import { Container } from 'components';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useRouter from 'utils/useRouter';
import logo from '../../../../assets/img/logo-best.svg';
import Language from './Language';
import useStyles from './style';
import axios from 'utils/axios';
import { urlGetSetting } from 'services/urlAPI';

const NavBar = () => {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  useEffect(() => {}, [router.location.pathname]);

  useEffect(() => {
    let mounted = true;

    const fetchData = () => {
      axios
        .get(`${urlGetSetting}`, {})
        .then(response => {
          console.log('response: ', response);

          if (mounted) {
            console.log('response: ', response);

            // setData(response.data);
          }
        })
        .catch(error => {
          console.log('error: ', error);
        });
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  const toggle = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className={clsx(classes.root, openMenu && classes.menuOpenRoot)}>
      <Container>
        <div className={classes.container}>
          <IconButton className={classes.pushmenu} onClick={toggle}>
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
              <li className={classes.li}>
                <Link to="/" className={[classes.a, classes.active].join(' ')}>
                  <Home className={classes.icon} />
                  <span className={classes.span}>Trang chủ</span>
                </Link>
              </li>
              <li className={classes.li}>
                <Link to="/event" className={classes.a}>
                  <Home className={classes.icon} />
                  <span className={classes.span}>Sự kiện sắp tới</span>
                </Link>
              </li>
            </ul>
          </div>
          {openMenu && (
            <div className={classes.closeMenu} onClick={toggle}></div>
          )}
          <IconButton className={classes.search}>
            <Link to="/search" >
              <Search fontSize="large" />
            </Link>
          </IconButton>

          <Language />
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
