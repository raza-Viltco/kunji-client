import { actionTypes } from "../../../actions/action-types";

const initialState = {
  data: [],
  gatePassList: [],
  approval_data: "",
  gatePassApproval: "",
  servantData: "",
};

const servantApprovalReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_SERVANT_APPROVAL_LIST:
      return { ...state, data: payload };
    case actionTypes.SET_GATE_APPROVE_LIST:
      return { ...state, gatePassList: payload };
    case actionTypes.SET_SERVANT_APPROVAL:
      return { ...state, approval_data: payload };
    case actionTypes.SET_GATE_PASS_APPROVAL:
      return { ...state, gatePassApproval: payload };
    case actionTypes.SET_SERVANT_LIST:
      return { ...state, servantData: payload };
    default:
      return state;
  }
};
export default servantApprovalReducer;
