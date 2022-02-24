import { actionTypes } from "../../actions/action-types";

const initialState = {
  data: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_USER_DATA:
      return { ...state, data: payload };
    case actionTypes.USER_REGISTER_DATA:
      return { ...state, data: payload };
    default:
      return state;
  }
};

export default userReducer;
