import { actionTypes } from "../../actions/action-types";

const initialState = {
  buildingData: null,
  horizontalBuilding: null,
  verticalData: [],
  floorData: [],
  mappingId: null,
  areaMapping: null,
};

const societyConfigReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_VERTICAL_BUILDING:
      return { ...state, buildingData: payload };
    case actionTypes.SET_HORIZONTAL_BUILDING:
      return { ...state, horizontalBuilding: payload };
    case actionTypes.SET_BUILDING_DATA:
      return { ...state, verticalData: payload };
    case actionTypes.SET_FLOOR_DATA:
      return { ...state, floorData: payload };
    case actionTypes.SET_MAPPING_ID:
      return { ...state, mappingId: payload };
    case actionTypes.SET_AREA_MAPPING:
      return { ...state, areaMapping: payload };
    default:
      return state;
  }
};

export default societyConfigReducer;
