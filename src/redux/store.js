import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";

import userReducer from "./reducer/user";
import localReducer from "./reducer/local";
import otpReducer from "./reducer/otp";
import passwordReducer from "./reducer/password";

export const localhistory = createBrowserHistory();

const reducers = (history) =>
  combineReducers({
    local: localReducer,
    user: userReducer,
    otp: otpReducer,
    password: passwordReducer,
    router: connectRouter(history),
  });

const sagaMiddleware = createSagaMiddleware();
const routingMiddleware = routerMiddleware(localhistory);

const middleware = [routingMiddleware, sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers(localhistory),
  {},
  composeEnhancers(applyMiddleware(...middleware))
);
sagaMiddleware.run(watcherSaga);

export default store;
