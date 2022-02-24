import { actionTypes } from "../../actions/action-types";

const initialState = {
  data: null,
};

const passwordReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_FORGOT_PASSWORD:
      return { ...state, data: payload };
    case actionTypes.SET_RECOVER_PASSWORD:
      return { ...state, data: payload };
    default:
      return state;
  }
};

export default passwordReducer;
