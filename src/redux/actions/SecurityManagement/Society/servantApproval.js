import { actionTypes } from "../../action-types";

export const servantApprovalList = () => ({
  type: actionTypes.SERVANT_APPROVAL_LIST,
});

export const setServantApprovalList = (payload) => ({
  type: actionTypes.SET_SERVANT_APPROVAL_LIST,
  payload,
});

export const servantApproval = (payload) => ({
  type: actionTypes.SERVANT_APPROVAL,
  payload,
});

export const setServantApproval = (payload) => ({
  type: actionTypes.SET_SERVANT_APPROVAL,
  payload,
});
