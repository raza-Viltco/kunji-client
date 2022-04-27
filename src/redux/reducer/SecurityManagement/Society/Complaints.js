import { actionTypes } from "../../../actions/action-types";

const initialState = {
  allCases: null,
};

const complaintCasesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_COMPLAINT_CASES:
      return { ...state, allCases: payload };
    default:
      return state;
  }
};

export default complaintCasesReducer;
