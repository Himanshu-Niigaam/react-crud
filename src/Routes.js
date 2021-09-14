import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import Dashboard from "./Components/Dashboard/Dashboard";
import PageNotFound from "./Components/ErrorPages/PageNotFound";

const Routes = (props) => {
  return (
    <Router {...props}>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
