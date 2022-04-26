import { actionTypes } from "../../actions/action-types";

export const addBuilding = (payload) => ({
  type: actionTypes.VERTICAL_BUILDING,
  payload,
});

export const setAddBuilding = (payload) => ({
  type: actionTypes.SET_VERTICAL_BUILDING,
  payload,
});

export const horizontalBuilding = (payload) => ({
  type: actionTypes.HORIZONTAL_BUILDING,
  payload,
});

export const setHorizontalBuilding = (payload) => ({
  type: actionTypes.SET_HORIZONTAL_BUILDING,
  payload,
});

export const buildingData = () => ({
  type: actionTypes.BUILDING_DATA,
});

export const setBuildingData = (payload) => ({
  type: actionTypes.SET_BUILDING_DATA,
  payload,
});

export const floorData = (payload) => ({
  type: actionTypes.FLOOR_DATA,
  payload,
});

export const setFloorData = (payload) => ({
  type: actionTypes.SET_FLOOR_DATA,
  payload,
});

export const setMappingId = (payload) => ({
  type: actionTypes.SET_MAPPING_ID,
  payload,
});

export const areaMapping = (payload) => ({
  type: actionTypes.AREA_MAPPING,
  payload,
});

export const setAreaMapping = (payload) => ({
  type: actionTypes.SET_AREA_MAPPING,
  payload,
});

export const verticalMapping = (payload) => ({
  type: actionTypes.VERTICAL_MAPPING,
  payload,
});

export const setVerticalMapping = (payload) => ({
  type: actionTypes.SET_VERTICAL_MAPPING,
  payload,
});

export const appartmentList = (payload) => ({
  type: actionTypes.APPARTMENT_LIST,
  payload,
});

export const setAppartmentList = (payload) => ({
  type: actionTypes.SET_APPARTMENT_LIST,
  payload,
});
