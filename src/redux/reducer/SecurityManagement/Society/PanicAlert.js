import { actionTypes } from "../../../actions/action-types";

const initialState = {
  panicAlertData: "",
};

const panicAlertReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_PANIC_ALERT:
      return { ...state, panicAlertData: payload };
    default:
      return state;
  }
};
export default panicAlertReducer;
