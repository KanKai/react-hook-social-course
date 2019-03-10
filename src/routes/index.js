import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "containers/Login";
import Register from "containers/Register";

function CustomRoute() {
  return (
    <React.Fragment>
      <Route exact path="/" component={() => <Redirect to="/sign-in" />} />
      <Route exact path="/sign-in" component={Login} />
      <Route exact path="/sign-up" component={Register} />
    </React.Fragment>
  );
}

export default CustomRoute;
