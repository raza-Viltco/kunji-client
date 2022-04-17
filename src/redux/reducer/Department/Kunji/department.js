import { actionTypes } from "../../../actions/action-types";

const initialState = {
  data:[],
};

const departmentListingReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_DEPARTMENT_LISTING:
      return { ...state, data: payload };
    default:
      return state;
  }
};
export default departmentListingReducer;
