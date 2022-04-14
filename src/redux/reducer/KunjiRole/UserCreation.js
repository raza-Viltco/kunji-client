import { actionTypes } from "../../actions/action-types";

const initialState = {
  data: [],
};

const userDepartmentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_USER_DEPARTMENT:
      return { ...state, data: payload };

    default:
      return state;
  }
};
export default userDepartmentReducer;
