import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import WelcomePage from './ChatHeader';
import Chat from './Chat';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/chat" component={Chat} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default App;

