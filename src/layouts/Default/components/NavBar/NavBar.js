import { IconButton } from '@material-ui/core';
import { Menu as MenuIcon, Search } from '@material-ui/icons';
import clsx from 'clsx';
import { Container } from 'components';
import Lodash from 'lodash';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getSafeValue, getTransObj } from 'utils';
import { TYPE_MENU } from 'utils/constant';
import useRouter from 'utils/useRouter';
import { mapIcon } from 'views/Home/components/MapSection/MapSection';
import logo from '../../../../assets/img/logo-best.svg';
import Language from './Language';
import useStyles from './style';

const NavBar = () => {
  const classes = useStyles();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  const menuData = useSelector(state => state.setup.menu);
  const lang = useSelector(state => state.multiLang.lang);
  const [listMenu, setlistMenu] = useState([]);

  // console.log('menuData', menuData);
  // useEffect(() => {}, [router.location.pathname]);

  // console.log(location.pathname);

  useEffect(() => {
    let mounted = true;

    // const fetchData = () => {
    //   const key = 'MENU_WEB_CONFIG';
    //   const path = replaceStrUrl(urlGetMenuConfig, [key]);

    //   axios
    //     .get(`${path}`, {})
    //     .then(response => {
    //       // console.log('response: ', response);

    //       if (mounted) {
    //         // console.log('response: ', response);
    //         // setData(response.data);
    //       }
    //     })
    //     .catch(error => {
    //       console.log('error: ', error);
    //     });
    // };

    // fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  const transformMenu = (listMenu, lang) => {
    const newList = Lodash.map(listMenu, obj => {
      const type = getSafeValue(obj, 'type', '');
      const translations = getSafeValue(obj, 'translations', []);
      const objTrans = getTransObj(translations, lang);
      const idObj = getSafeValue(obj, 'id', '');

      let link = '/';
      switch (type) {
        case TYPE_MENU.HOME: {
          link = '/home';
          break;
        }
        case TYPE_MENU.CATEGORY: {
          link = `/category/${idObj}`;
          break;
        }
        case TYPE_MENU.POST: {
          link = `/post/${idObj}`;
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

        default:
          break;
      }

      return { ...obj, link, ...objTrans };
    });

    return newList;
  };

  useEffect(() => {
    // Transform data to new form data, and get route from there.
    const newListMenu = transformMenu(menuData, lang);
    // console.log('newListMenu', newListMenu);
    setlistMenu(newListMenu);
  }, [menuData, lang]);

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
            {/* <div className={classes.imgTopBox}>
              <img className={classes.imgTop} src={logo} alt="logo" />
            </div> */}

            <ul className={classes.ul}>
              {listMenu.map((obj, key) => {
                const link = obj.link;
                const isSamePath = link === location.pathname;

                return (
                  <li className={classes.li} key={key}>
                    <Link
                      to={obj.link}
                      onClick={toggle}
                      className={[classes.a, isSamePath && classes.active].join(
                        ' '
                      )}>
                      {/* <Home className={classes.icon} /> */}
                      <span className={classes.span}>{obj.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {openMenu && (
            <div className={classes.closeMenu} onClick={toggle}></div>
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
