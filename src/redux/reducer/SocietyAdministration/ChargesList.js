import { actionTypes } from "../../actions/action-types";

const initialState = {
  chargesData: "",
};

const ChargesListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_CHARGES_LIST:
      return { ...state, chargesData: payload };
    case actionTypes.SET_ADD_CHARGES:
      return { ...state, chargesData: [payload, ...state.chargesData] };
    default:
      return state;
  }
};
export default ChargesListReducer;
