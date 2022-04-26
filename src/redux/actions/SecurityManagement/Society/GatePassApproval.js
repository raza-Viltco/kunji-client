import { actionTypes } from "../../action-types";

export const gateApprovalList = () => ({
  type: actionTypes.GATE_APPROVE_LIST,
});

export const setGateApprovalList = (payload) => ({
  type: actionTypes.SET_GATE_APPROVE_LIST,
  payload,
});

export const gatePassApproval = (payload) => ({
  type: actionTypes.GATE_PASS_APPROVAL,
  payload,
});

export const setGatePassApproval = (payload) => ({
  type: actionTypes.SET_GATE_PASS_APPROVAL,
  payload,
});
