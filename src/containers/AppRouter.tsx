import { Component } from 'react';
//Router import
import { Switch, Route, } from 'react-router-dom';
//Components import
import { Home, Contractors, Employer } from "containers"

class AppRouter extends Component {

  render() {
    return (
      <Switch>
        <Route path="/contractors">
          <Contractors />
        </Route>
        <Route path="/employer">
          <Employer />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    );
  }
}

export default AppRouter;
