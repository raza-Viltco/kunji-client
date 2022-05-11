import { actionTypes } from "../action-types";

export const chargesList = () => ({
  type: actionTypes.CHARGES_LIST,
});

export const setChargesList = (payload) => ({
  type: actionTypes.SET_CHARGES_LIST,
  payload,
});
