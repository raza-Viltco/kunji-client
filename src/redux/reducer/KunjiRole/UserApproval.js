import { actionTypes } from "../../actions/action-types";

const initialState = {
  data: [],
};

const userApprovalReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_APPROVAl_LISTING:
      return { ...state, data: payload };
    default:
      return state;
  }
};
export default userApprovalReducer;
