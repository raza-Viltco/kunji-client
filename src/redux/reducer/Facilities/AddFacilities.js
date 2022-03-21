import { actionTypes } from "../../actions/action-types";

const initialState = {
  facilitiesListing: [],
};

const addFacilityReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_FACILITIES_LIST:
      return { ...state, facilitiesListing: payload };
    default:
      return state;
  }
};

export default addFacilityReducer;
