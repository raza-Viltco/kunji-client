import { actionTypes } from "../action-types";

export const addCharges = (payload) => ({
  type: actionTypes.ADD_CHARGES,
  payload,
});

export const setAddCharges = (payload) => ({
  type: actionTypes.SET_ADD_CHARGES,
  payload,
});
