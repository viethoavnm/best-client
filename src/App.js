import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
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

const App = () => {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
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
