import { actionTypes } from "../../actions/action-types";

const initialState = {
  termsData: null,
  createTerms: null,
};

const termsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_TERMS_DATA:
      return { ...state, termsData: payload };
    case actionTypes.SET_CREATE_TERMS:
      return { ...state, createTerms: payload };
    default:
      return state;
  }
};

export default termsReducer;
