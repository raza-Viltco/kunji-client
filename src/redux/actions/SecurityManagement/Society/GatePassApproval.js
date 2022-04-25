import { actionTypes } from "../../action-types";

export const gateApprovalList = () => ({
  type: actionTypes.GATE_APPROVE_LIST,
});

export const setGateApprovalList = (payload) => ({
  type: actionTypes.SET_GATE_APPROVE_LIST,
  payload,
});
