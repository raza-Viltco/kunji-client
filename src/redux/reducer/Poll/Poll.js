import { actionTypes } from "../../actions/action-types";

const initialState = {
  pollList: "",
  viewPoll: "",
};

const pollReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_POLL_LIST:
      return { ...state, pollList: payload };
    case actionTypes.SET_VIEW_POLL:
      return { ...state, viewPoll: payload };
    default:
      return state;
  }
};

export default pollReducer;
