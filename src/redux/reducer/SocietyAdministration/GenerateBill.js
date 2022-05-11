import { actionTypes } from "../../actions/action-types";

const initialState = {
  residentData: [],
};

const generateBillReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_SELECT_RESIDENT:
      return { ...state, residentData: payload };
    default:
      return state;
  }
};
export default generateBillReducer;
