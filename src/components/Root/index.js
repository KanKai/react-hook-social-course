import React, { useEffect } from "react";
import CustomRoute from "routes/CustomRoute";
import { Provider, connect } from "react-redux";
import { Router, Switch } from "react-router-dom";
import history from "routes/history";
import stores from "stores";
import { PrivacyRequest } from "helpers/request";
import { actionTypes } from "stores/actions";

function Root(props) {
  stores.subscribe(() => {});
  useEffect(() => {
    PrivacyRequest().then(result => {
      // const dispatch = stores.dispatch;
      // dispatch({ type: actionTypes.SET_PRIVACIES, payload: result });
      props.setPrivacies(result);
    });
  }, []);
  useEffect(() => {
    console.log("Post is changed", props.post);
  }, [props.post]);
  return (
    <>
      <Router history={history}>
        <Switch>
          <CustomRoute />
        </Switch>
      </Router>
    </>
  );
}

const withProvider = Component => props => {
  return (
    <Provider store={stores}>
      <Component />
    </Provider>
  );
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    setPrivacies: data =>
      dispatch({ type: actionTypes.SET_PRIVACIES, payload: data })
  };
};

export default withProvider(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Root)
);
