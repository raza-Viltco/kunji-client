import { actionTypes } from "../action-types";

export const viewBill = () => ({
  type: actionTypes.VIEW_BILL,
});

export const setViewBill = (payload) => ({
  type: actionTypes.SET_VIEW_BILL,
  payload,
});
