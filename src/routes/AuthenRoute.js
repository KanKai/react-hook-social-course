import React from "react";
import { Route } from "react-router-dom";
import Timeline from "containers/Timeline";
import Layout from "components/Layout";

function AuthRoute() {
  return (
    <Layout>
      <Route exact path="/timeline/:id?" component={Timeline} />
      {/* <Route component={() => <h1>Not found</h1>} /> */}
    </Layout>
  );
}

export default AuthRoute;
