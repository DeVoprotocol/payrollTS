import { Component } from 'react';
//Router import
import { Switch, Route, } from 'react-router-dom';
//Components import
import { Home, Contractors, Employer, Header, Footer } from "containers"

class AppRouter extends Component {

  render() {
    return (
      <Switch>
        <Route path="/contractors">
          <Header />
          <Contractors />
        </Route>
        <Route path="/employer">
          <Header />
          <Employer />
        </Route>
        <Route path="/">
          <Home />
          <Footer />
        </Route>
      </Switch>
    );
  }
}

export default AppRouter;
