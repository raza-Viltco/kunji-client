import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";

import userReducer from "./reducer/user";

const reducers = combineReducers({
	user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(reducers, {}, applyMiddleware(...middleware));
sagaMiddleware.run(watcherSaga);

export default store;
