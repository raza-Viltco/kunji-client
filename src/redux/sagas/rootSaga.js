import { takeLatest } from "redux-saga/effects";
import { actionTypes } from "../actions/action-types";
import {
  handleLogin,
  handleRegister,
  handlerLogout,
} from "./handlers/Auth/user";
import {
  handleForgotPassword,
  handleRecoverPassword,
} from "./handlers/Auth/password";
import {
  handleForgotPasswordOtp,
  handleRegisterOtp,
  handleResendRegisterOtp,
} from "./handlers/Auth/otp";

export function* watcherSaga() {
  yield takeLatest(actionTypes.LOGIN, handleLogin);
  yield takeLatest(actionTypes.LOGOUT, handlerLogout);
  yield takeLatest(actionTypes.REGISTER, handleRegister);
  yield takeLatest(actionTypes.REGISTER_OTP, handleRegisterOtp);
  yield takeLatest(actionTypes.RESEND_REGISTER_OTP, handleResendRegisterOtp);
  yield takeLatest(actionTypes.FORGOT_PASSWORD, handleForgotPassword);
  yield takeLatest(actionTypes.FORGOT_PASSWORD_OTP, handleForgotPasswordOtp);
  yield takeLatest(actionTypes.RECOVER_PASSWORD, handleRecoverPassword);
}
