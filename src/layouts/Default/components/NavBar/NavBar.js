import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';

import useRouter from 'utils/useRouter';

const useStyles = makeStyles(() => ({
  root: { flexGrow: 1 },
  webTitle: {
    background: `linear-gradient(90deg, #92BF1F -18.89%, #F7B033 125.73%)`,
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    fontSize: 25,
    fontWeight: 600
  },
  dividerTitle: {
    width: 3,
    height: '100%',
    background: `linear-gradient(180deg, #F2AE00 0%, #709700 100%)`,
    backgroundColor: 'red'
  },
  navBar: {
    background: `linear-gradient(90deg, #92BF1F -18.89%, #F7B033 125.73%)`
  },
  border: {
    borderLeft: `.5px solid #ffffff`,
    lineHeight: 3
  }
}));

const NavBar = () => {
  const classes = useStyles();
  const router = useRouter();

  useEffect(() => {}, [router.location.pathname]);

  return (
    <AppBar color="inherit" position="static">
      <div className={clsx(classes.navBar)}>
        <RouterLink to="/home">
          {/* <FormattedMessage {...messages.home} /> */}
          {`Trang chủ`}
        </RouterLink>

        <RouterLink to="/about-us">
          {/* <FormattedMessage {...messages.home} /> */}
          {`Giới thiệu`}
        </RouterLink>
        <RouterLink to="/vcbg-technology">
          {/* <FormattedMessage {...messages.home} /> */}
          {`Công nghệ VCBG`}
        </RouterLink>
        <RouterLink to="/events">
          {/* <FormattedMessage {...messages.home} /> */}
          {`Sự kiện sắp tới`}
        </RouterLink>
        <RouterLink to="/libs">
          {/* <FormattedMessage {...messages.home} /> */}
          {`Thư Viện`}
        </RouterLink>
        <RouterLink to="/news">
          {/* <FormattedMessage {...messages.home} /> */}
          {`Bản tin`}
        </RouterLink>
      </div>
    </AppBar>
  );
};

NavBar.propTypes = {
  className: PropTypes.string
};

export default NavBar;
