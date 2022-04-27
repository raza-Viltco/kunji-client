import { actionTypes } from "../../../actions/action-types";

export const complaintsCases = () => ({
  type: actionTypes.COMPLAINT_CASES,
});

export const setComplaintCases = (payload) => ({
  type: actionTypes.SET_COMPLAINT_CASES,
  payload,
});
