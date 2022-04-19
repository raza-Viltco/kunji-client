import { actionTypes } from "../../../actions/action-types";

const initialState = {
  data: [],
};

const assignOwnershipReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_ASSIGN_APPARTMENT_DATA:
      return { ...state, data: payload };

    default:
      return state;
  }
};
export default assignOwnershipReducer;
