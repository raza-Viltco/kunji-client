import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";

import userReducer from "./reducer/user";
import localReducer from "./reducer/local";

const reducers = combineReducers({
	local: localReducer,
	user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(...middleware)));
sagaMiddleware.run(watcherSaga);

export default store;
