import { call, put } from "redux-saga/effects";
import { push } from "connected-react-router";

import {
  forgotPasswordApi,
  recoverPasswordApi,
  updatePasswordApi,
} from "../../apis/Auth/password";
import { localApiStateHandler } from "../localApiStateHandler";
import { saveToPersistance } from "../../../../utils/functions";
import {
  setForgotPassword,
  setRecoverPassword,
} from "../../../actions/Auth/password";
import { setError } from "../../../actions/local";

export function* handleForgotPassword(action) {
  function* api() {
    saveToPersistance("forgot_email", action.payload.email);
    const { data } = yield call(forgotPasswordApi, action.payload);
    yield put(setForgotPassword(data));
    yield put(
      setError({
        type: "success",
        message: data.message,
      })
    );
    yield put(push("/otp_verification/:forgot"));
  }

  yield call(() => localApiStateHandler(api));
}

export function* handleRecoverPassword(action) {
  function* api() {
    const { data } = yield call(recoverPasswordApi, action.payload);
    yield put(setRecoverPassword(data));
    yield put(
      setError({
        type: "success",
        message: data.message,
      })
    );
    yield put(push("/login"));
  }

  yield call(() => localApiStateHandler(api));
}

export function* handleUpdatePassword(action) {
  console.log(action);
  const { values } = action.payload;
  const { resetForm } = action.payload.formikActions;
  function* api() {
    const { data } = yield call(updatePasswordApi, values);
    yield call(resetForm);
    yield put(
      setError({
        type: "success",
        message: data.message,
      })
    );
  }
  yield call(() => localApiStateHandler(api));
}
