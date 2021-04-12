import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MomentUtils from '@date-io/moment';
import { Provider as StoreProvider } from 'react-redux';

import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { renderRoutes } from 'react-router-config';

import { configureStore } from './store';
import theme from './theme';
import routes from './routes';
import { ScrollReset, CookiesNotification } from './components';
import './mixins/moment';
import './mixins/validate';
// import './mock';
import './assets/scss/index.scss';

const history = createBrowserHistory();
const store = configureStore();

const App = () => {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Router history={history}>
            <ScrollReset />
            <CookiesNotification />
            {renderRoutes(routes)}
          </Router>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
