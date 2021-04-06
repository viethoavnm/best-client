import React, { Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { LinearProgress } from '@material-ui/core';

import { TopBar, NavBar } from './components';
import { Footer } from 'components';

import useStyles from './styles';

const Default = props => {
  const { route } = props;

  const classes = useStyles();
  // const [openNavBarMobile, setOpenNavBarMobile] = useState(false);

  const handleNavBarMobileOpen = () => {
    // setOpenNavBarMobile(true);
  };

  // const handleNavBarMobileClose = () => {
  //   setOpenNavBarMobile(false);
  // };

  return (
    <div className={classes.root}>
      <TopBar
        className={classes.topBar}
        onOpenNavBarMobile={handleNavBarMobileOpen}
      />
      <NavBar />

      <div className={classes.container}>
        <main className={classes.content}>
          <Suspense fallback={<LinearProgress />}>
            {renderRoutes(route.routes)}
          </Suspense>
          <Footer />
        </main>
      </div>
    </div>
  );
};

Default.propTypes = {
  route: PropTypes.object
};

export default Default;
