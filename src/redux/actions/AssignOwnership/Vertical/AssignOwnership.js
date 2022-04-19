import { actionTypes } from "../../action-types";

export const assignAppartmentData = () => ({
  type: actionTypes.ASSIGN_APPARTMENT_DATA,
});

export const setAssignAppartmentData = (payload) => ({
  type: actionTypes.SET_ASSIGN_APPARTMENT_DATA,
  payload,
});
