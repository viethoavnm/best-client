import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/styles';
import 'firebase/analytics';
import { createBrowserHistory } from 'history';
import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router } from 'react-router-dom';
// const store = configureStore();
import './App.css';
import { CookiesNotification, ScrollReset } from './components';
import firebase from './firebase';
import './mixins/moment';
import './mixins/validate';
import routes from './routes';
import store from './store/configureStore';
import theme from './theme';
import { Helmet } from 'react-helmet';
firebase.analytics();
const history = createBrowserHistory();

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
            <meta
              property="og:title"
              content="BEST - Công nghệ khí hóa sinh khối"
            />
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
