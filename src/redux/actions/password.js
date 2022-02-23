import { actionTypes } from "./action-types";

export const forgotPassword = (payload) => ({
  type: actionTypes.FORGOT_PASSWORD,
  payload,
});

export const setForgotPassword = (payload) => ({
  type: actionTypes.SET_FORGOT_PASSWORD,
  payload,
});

export const recoverPassword = (payload) => ({
  type: actionTypes.RECOVER_PASSWORD,
  payload,
});

export const setRecoverPassword = (payload) => ({
  type: actionTypes.SET_RECOVER_PASSWORD,
  payload,
});
