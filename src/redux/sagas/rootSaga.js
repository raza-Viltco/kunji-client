import { takeLatest } from "redux-saga/effects";
import { actionTypes } from "../actions/action-types";
import { handleLogin, handleRegister } from "./handlers/user";
import { handleRegisterOtp, handleForgotPasswordOtp } from "./handlers/otp";
import {
  handleForgotPassword,
  handleRecoverPassword,
} from "./handlers/password";

export function* watcherSaga() {
  yield takeLatest(actionTypes.LOGIN, handleLogin);
  yield takeLatest(actionTypes.REGISTER, handleRegister);
  yield takeLatest(actionTypes.REGISTER_OTP, handleRegisterOtp);
  yield takeLatest(actionTypes.FORGOT_PASSWORD, handleForgotPassword);
  yield takeLatest(actionTypes.FORGOT_PASSWORD_OTP, handleForgotPasswordOtp);
  yield takeLatest(actionTypes.RECOVER_PASSWORD, handleRecoverPassword);
}
