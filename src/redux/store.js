import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

import createRootReducer from "./rootReducers"

export const localhistory = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const routingMiddleware = routerMiddleware(localhistory);

const middleware = [routingMiddleware, sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  createRootReducer(localhistory),
  {},
  composeEnhancers(applyMiddleware(...middleware))
);
sagaMiddleware.run(watcherSaga);

export default store;
