import { actionTypes } from "../action-types";

export const viewSociety = (payload) => ({
  type: actionTypes.VIEW_SOCIETY,
  payload,
});

export const setViewSociety = (payload) => ({
  type: actionTypes.SET_VIEW_SOCIETY,
  payload,
});

export const societyStatus = (payload) => ({
  type: actionTypes.SOCIETY_STATUS,
  payload,
});

export const setSocietyStatus = (payload) => ({
  type: actionTypes.SET_SOCIETY_STATUS,
  payload,
});
