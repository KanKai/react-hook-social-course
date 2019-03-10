import React from "react";
import AuthRoute from "routes/AuthenRoute";
import NonAuthRoute from "routes";
import { Router, Switch } from "react-router-dom";
import history from "routes/history";

function Root() {
  return (
    <>
      <Router history={history}>
        <Switch>
          <AuthRoute />
          <NonAuthRoute />
        </Switch>
      </Router>
    </>
  );
}

export default Root;
