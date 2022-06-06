import { actionTypes } from "../action-types";

export const terms = (payload) => ({
  type: actionTypes.CREATE_TERMS,
  payload,
});

export const setTerms = (payload) => ({
  type: actionTypes.SET_CREATE_TERMS,
  payload,
});
