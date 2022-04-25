import { actionTypes } from "../../../actions/action-types";

const initialState = {
  data: [],
  approval_data: "",
};

const servantApprovalReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_SERVANT_APPROVAL_LIST:
      return { ...state, data: payload };
    case actionTypes.SET_SERVANT_APPROVAL:
      return { ...state, approval_data: payload };
    default:
      return state;
  }
};
export default servantApprovalReducer;
