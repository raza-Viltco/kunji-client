import { actionTypes } from "../../actions/action-types";

const initialState = {
  buildingData: null,
  horizontalBuilding: null,
  buildingData: [],
};

const societyConfigReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_VERTICAL_BUILDING:
      return { ...state, buildingData: payload };
    case actionTypes.SET_HORIZONTAL_BUILDING:
      return { ...state, horizontalBuilding: payload };
    case actionTypes.SET_BUILDING_DATA:
      return { ...state, buildingData: payload };
    default:
      return state;
  }
};

export default societyConfigReducer;
