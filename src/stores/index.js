import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import middleware from "./middlewares";
import logger from "redux-logger";
const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
