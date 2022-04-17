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
