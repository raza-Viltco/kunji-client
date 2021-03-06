import { actionTypes } from "../action-types";

export const registerOtp = (payload) => ({
  type: actionTypes.REGISTER_OTP,
  payload,
});

export const setRegisterOtp = (payload) => ({
  type: actionTypes.SET_REGISTER_OTP,
  payload,
});

export const resendRegisterOtp = () => ({
  type: actionTypes.RESEND_REGISTER_OTP,
});

export const setResendRegisterOtp = (payload) => ({
  type: actionTypes.SET_RESEND_REGISTER_OTP,
  payload,
});

export const forgotPasswordOtp = (payload) => ({
  type: actionTypes.FORGOT_PASSWORD_OTP,
  payload,
});

export const setForgotPasswordOtp = (payload) => ({
  type: actionTypes.SET_FORGOT_PASSWORD_OTP,
  payload,
});
