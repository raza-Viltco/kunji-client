import { call, put } from "redux-saga/effects";
import { push } from "connected-react-router";

import { forgotPasswordApi, recoverPasswordApi } from "../apis/password";
import { localApiStateHandler } from "./localApiStateHandler";
import { saveToPersistance } from "../../../utils/functions";
import { setForgotPassword, setRecoverPasswor } from "../../actions/password";

export function* handleForgotPassword(action) {
  function* api() {
    saveToPersistance("forgot_email", action.payload.email);
    const { data } = yield call(forgotPasswordApi, action.payload);
    yield put(setForgotPassword(data));
    yield put(push("/otp_resetPassword/:forgot"));
  }

  yield call(() => localApiStateHandler(api));
}

export function* handleRecoverPassword(action) {
  function* api() {
    const { data } = yield call(recoverPasswordApi, action.payload);
    yield put(setRecoverPasswor(data));
    yield put(push("/login"));
  }

  yield call(() => localApiStateHandler(api));
}
