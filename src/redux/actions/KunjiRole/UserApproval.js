import { actionTypes } from "../action-types";

export const approvalListing = () => ({
  type: actionTypes.APPROVAL_LISTING,
});

export const setApprovalListing = (payload) => ({
  type: actionTypes.SET_APPROVAl_LISTING,
  payload,
});

export const userApproval = (payload) => ({
  type: actionTypes.USER_APPROVAL,
  payload,
});

export const setUserApproval = (payload) => ({
  type: actionTypes.SET_USER_APPROVAL,
  payload,
});
