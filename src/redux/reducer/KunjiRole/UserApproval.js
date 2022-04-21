import { actionTypes } from "../../actions/action-types";

const initialState = {
  data: [],
  user: [],
};

const userApprovalReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_APPROVAl_LISTING:
      return { ...state, data: payload };
    case actionTypes.SET_USER_APPROVAL:
      return { ...state, user: payload };
    default:
      return state;
  }
};
export default userApprovalReducer;
