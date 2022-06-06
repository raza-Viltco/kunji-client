import { actionTypes } from "../action-types";

export const terms = (payload) => ({
  type: actionTypes.CREATE_TERMS,
  payload,
});

export const setTerms = (payload) => ({
  type: actionTypes.SET_CREATE_TERMS,
  payload,
});

export const termsData = () => ({
  type: actionTypes.TERMS_DATA,
});

export const setTermsData = (payload) => ({
  type: actionTypes.SET_TERMS_DATA,
  payload,
});
