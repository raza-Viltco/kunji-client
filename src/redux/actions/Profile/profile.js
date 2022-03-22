import { actionTypes } from "../action-types";

export const viewProfile = () => ({
  type: actionTypes.VIEW_PROFILE,
});

export const setViewProfile = (payload) => ({
  type: actionTypes.SET_VIEW_PROFILE,
  payload,
});

export const profileUpdate = (payload) => ({
  type: actionTypes.PROFILE_UPDATE,
  payload,
});

export const setProfileUpdate = (payload) => ({
  type: actionTypes.SET_PROFILE_UPDATE,
  payload,
});

export const setAppbarImg = (payload) => ({
  type: actionTypes.SET_APPBAR_IMAGE,
  payload,
});
