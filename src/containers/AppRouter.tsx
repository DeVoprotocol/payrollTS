import React, { Component } from 'react';
import { Switch, Route, } from 'react-router-dom';
import { Home, Contractors } from "./"

class AppRouter extends Component {

  render() {
    return (
      <Switch>
        <Route path="/contractors">
          <Contractors />
        </Route>
        <Route path="/employer">
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    );
  }
}

export default AppRouter;
