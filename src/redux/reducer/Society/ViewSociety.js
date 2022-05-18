import { actionTypes } from "../../actions/action-types";

const initialState = {
  viewSocietyData: [],
};

const viewSocietyReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_VIEW_SOCIETY:
      return { ...state, viewSocietyData: payload };
    default:
      return state;
  }
};

export default viewSocietyReducer;
