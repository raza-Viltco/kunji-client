import { actionTypes } from "../../actions/action-types";

const initialState = {
  societyList: [],
  societyEditId: "",
  societyEditList: "",
};

const societyListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_SOCIETY_LIST:
      return { ...state, societyList: payload };
    case actionTypes.SET_EDIT_SOCIETY_ID:
      return { ...state, societyEditId: payload };
    case actionTypes.SET_EDIT_SOCIETY_LIST:
      return { ...state, societyEditList: payload };
    default:
      return state;
  }
};

export default societyListReducer;
