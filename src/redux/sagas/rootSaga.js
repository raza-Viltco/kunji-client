import { takeLatest } from "redux-saga/effects";
import { actionTypes } from "../actions/action-types";
import { handleLogin, handleRegister } from "./handlers/user";

export function* watcherSaga() {
  yield takeLatest(actionTypes.LOGIN, handleLogin);
  yield takeLatest(actionTypes.REGISTER, handleRegister);
}
