import { actionTypes } from "../../actions/action-types";

const initialState = {
  data: [],
  staffData: [],
};

const userDepartmentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_USER_DEPARTMENT:
      return { ...state, data: payload };
    case actionTypes.SET_STAFF_LIST:
      return { ...state, staffData: payload };
    default:
      return state;
  }
};
export default userDepartmentReducer;
