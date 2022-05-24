import { actionTypes } from "../../../actions/action-types";

const initialState = {
  data: "",
  depStatus: "",
};

const departmentListingReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_DEPARTMENT_LISTING:
      return { ...state, data: payload };
    case actionTypes.SET_DEPARTMENT_STATUS:
      return { ...state, depStatus: payload };
    case actionTypes.SET_ADD_DEPARTMENT:
      return {...state, data: [payload, ...state.data]};
    default:
      return state;
  }
};
export default departmentListingReducer;
