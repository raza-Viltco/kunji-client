import { actionTypes } from "./action-types";

export const setLoading = (payload) => ({
  type: actionTypes.SET_LOADING,
  payload,
});

export const setError = (payload) => ({
  type: actionTypes.SET_ERROR,
  payload,
});

