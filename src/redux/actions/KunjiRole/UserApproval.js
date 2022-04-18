import { actionTypes } from "../action-types";

export const approvalListing = () => ({
  type: actionTypes.APPROVAL_LISTING,
});

export const setApprovalListing = (payload) => ({
  type: actionTypes.SET_APPROVAl_LISTING,
  payload,
});
