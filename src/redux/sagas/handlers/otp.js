import { push } from "connected-react-router";
import { call, put } from "redux-saga/effects";

import { setRegisterOtp, setForgotPasswordOtp } from "../../actions/otp";
import { registerOtpApi, forgotPasswordOtpApi } from "../apis/otp";
import { localApiStateHandler } from "./localApiStateHandler";
import { saveToPersistance } from "../../../utils/functions";

export function* handleRegisterOtp(action) {
  function* api() {
    const { data } = yield call(registerOtpApi, action.payload);
    yield put(setRegisterOtp(data));
    yield put(push("/login"));
  }

  yield call(() => localApiStateHandler(api));
}

export function* handleForgotPasswordOtp(action) {
  function* api() {
    const { data } = yield call(forgotPasswordOtpApi, action.payload);
    console.log(data);
    saveToPersistance("recovery_token", data.data.token);
    yield put(setForgotPasswordOtp(data));
    yield put(push("/recover_password"));
  }

  yield call(() => localApiStateHandler(api));
}
