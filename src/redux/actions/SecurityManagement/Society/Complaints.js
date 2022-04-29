import { actionTypes } from "../../../actions/action-types";

export const complaintsCases = () => ({
  type: actionTypes.COMPLAINT_CASES,
});

export const setComplaintCases = (payload) => ({
  type: actionTypes.SET_COMPLAINT_CASES,
  payload,
});

export const setCaseId = (payload) => ({
  type: actionTypes.SET_CASE_ID,
  payload,
});

export const complaintDetail = (payload) => ({
  type: actionTypes.COMPLAINT_DETAIL,
  payload,
});

export const setComplaintDetail = (payload) => ({
  type: actionTypes.SET_COMPLAINT_DETAIL,
  payload,
});

export const complaintReply = (payload) => ({
  type: actionTypes.COMPLAINT_REPLY,
  payload,
});

export const setComplaintReply = (payload) => ({
  type: actionTypes.SET_COMPLAINT_REPLY,
  payload,
});
