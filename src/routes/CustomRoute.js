import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Timeline from "containers/Timeline";
import Layout from "components/Layout";
import Login from "containers/Login";
import Register from "containers/Register";

function CustomRoute() {
  return (
    <Switch>
      <Layout>
        <Route exact path="/" component={() => <Redirect to="/sign-in" />} />
        <Route exact path="/sign-in" component={Login} />
        <Route exact path="/sign-up" component={Register} />
        <Layout>
          <Switch>
            <Route exact path="/timeline/:id?" component={Timeline} />
            <Route component={() => <h1>Not found</h1>} />
          </Switch>
        </Layout>
      </Layout>
    </Switch>
  );
}

export default CustomRoute;
