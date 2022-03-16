import { actionTypes } from "../action-types";

export const societyList = (payload) => ({
  type: actionTypes.SOCIETY_LIST,
  payload
});

export const setSocietyList = (payload) => ({
  type: actionTypes.SET_SOCIETY_LIST,
  payload,
});
