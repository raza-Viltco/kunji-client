import { actionTypes } from "../../../actions/action-types";

const initialState = {
  visitorData: "",
};

const visitorListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_VISITOR_LIST:
      return { ...state, visitorData: payload };
    default:
      return state;
  }
};
export default visitorListReducer;
