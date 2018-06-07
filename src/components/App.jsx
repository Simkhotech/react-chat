import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import WelcomePage from '../containers/WelcomePage';
import ChatPage from '../containers/ChatPage';
import configureStore from '../store';

import PrivateRoute from '../containers/PrivateRoute';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <PrivateRoute path="/chat" component={ChatPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </Provider>
);

export default App;

