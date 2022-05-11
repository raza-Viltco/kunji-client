import { actionTypes } from "../action-types";

export const selectResident = () => ({
  type: actionTypes.SELECT_RESIDENT,
});

export const setSelectResident = (payload) => ({
  type: actionTypes.SET_SELECT_RESIDENT,
  payload,
});

export const generateBill = (payload) => ({
  type: actionTypes.GENERATE_BILL,
  payload,
});

export const setGenerateBill = (payload) => ({
  type: actionTypes.SET_GENERATE_BILL,
  payload,
});
