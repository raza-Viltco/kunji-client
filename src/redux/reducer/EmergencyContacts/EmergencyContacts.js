import { actionTypes } from "../../actions/action-types";

const initialState = {
  contactsList: "",
};

const emergencyReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_SOCIETY_CONTACTS:
      return { ...state, contactsList: payload };
    default:
      return state;
  }
};

export default emergencyReducer;
