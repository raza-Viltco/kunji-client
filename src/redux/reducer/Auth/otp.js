import { actionTypes } from "../../actions/action-types";

const initialState = {
  data: null,
};

const otpReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_REGISTER_OTP:
      return { ...state, data: payload };
    case actionTypes.SET_FORGOT_PASSWORD_OTP:
      return { ...state, data: payload };
    default:
      return state;
  }
};

export default otpReducer;
