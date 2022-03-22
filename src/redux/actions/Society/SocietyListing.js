import { actionTypes } from "../action-types";

export const societyList = (payload) => ({
  type: actionTypes.SOCIETY_LIST,
  payload,
});

export const setSocietyList = (payload) => ({
  type: actionTypes.SET_SOCIETY_LIST,
  payload,
});

export const setSocietyEditId = (payload) => ({
  type: actionTypes.SET_EDIT_SOCIETY_ID,
  payload,
});

export const editSocietyList = (payload) => ({
  type: actionTypes.EDIT_SOCIETY_LIST,
  payload,
});

export const setEditSocietyList = (payload) => ({
  type: actionTypes.SET_EDIT_SOCIETY_LIST,
  payload,
});
