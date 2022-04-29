import { actionTypes } from "../../../actions/action-types";

const initialState = {
  allCases: null,
  complaintId: "",
  complaintDetail: "",
  complaintReply: "",
};

const complaintCasesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_COMPLAINT_CASES:
      return { ...state, allCases: payload };
    case actionTypes.SET_CASE_ID:
      return { ...state, complaintId: payload };
    case actionTypes.SET_COMPLAINT_DETAIL:
      return { ...state, complaintDetail: payload };
    case actionTypes.SET_COMPLAINT_REPLY:
      return { ...state, complaintReply: payload };
    default:
      return state;
  }
};

export default complaintCasesReducer;
