import React from 'react';
import {
  Switch,
  Route,
  useLocation,
  BrowserRouter as Router
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MomentUtils from '@date-io/moment';
import { Provider as StoreProvider } from 'react-redux';

import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { renderRoutes } from 'react-router-config';

import store from './store/configureStore';
import theme from './theme';
import routes from './routes';
import { ScrollReset, CookiesNotification } from './components';
import './mixins/moment';
import './mixins/validate';
// import './mock';
// import './assets/scss/index.scss';
import Home from 'views/Home';
import Event from 'views/Event';

const history = createBrowserHistory();
// const store = configureStore();
import './App.css';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import LogoBEST from 'assets/img/logo-best.svg';

const App = () => {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Helmet>
            <title>BEST - Công nghệ khí hóa sinh khối</title>
            <meta
              name="description"
              content="BEST là dự án công nghệ khí hoá sinh khối - Giải pháp năng lượng bền vững cho chế biến nông sản và quản lý chất thải ở nông thôn Việt Nam"
            />
            <meta name="robots" content="index, follow" />
            <meta
              property="og:title"
              content="BEST - Công nghệ khí hóa sinh khối"
            />
            <meta property="og:image" content={LogoBEST} />
            <meta
              property="og:description"
              content="BEST là dự án công nghệ khí hoá sinh khối - Giải pháp năng lượng bền vững cho chế biến nông sản và quản lý chất thải ở nông thôn Việt Nam"
            />
            <meta property="og:site_name" content="BEST" />
            <meta name="twitter:card" content="summary_large_image" />
          </Helmet>
          <Router>
            <ScrollReset />
            <CookiesNotification />
            {renderRoutes(routes)}

            {/* <Switch>
              <Route exact path="/home">
                <Home />
              </Route>

              <Route exact path="/event">
                <Event />
              </Route>
            </Switch> */}
          </Router>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
