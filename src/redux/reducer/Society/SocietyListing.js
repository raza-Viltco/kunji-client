import { actionTypes } from "../../actions/action-types";

const initialState = {
  societyList: [],
};

const societyListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_SOCIETY_LIST:
      return { ...state, societyList: payload };
    default:
      return state;
  }
};

export default societyListReducer;
