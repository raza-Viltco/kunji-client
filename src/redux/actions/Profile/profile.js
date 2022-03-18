import { actionTypes } from "../action-types";

export const viewProfile = (payload) => ({
  type: actionTypes.VIEW_PROFILE,
});

export const setViewProfile = (payload) => ({
  type: actionTypes.SET_VIEW_PROFILE,
  payload,
});
