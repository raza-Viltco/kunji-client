import { actionTypes } from "../../action-types";

export const vehicleList = () => ({
  type: actionTypes.VEHICEL_LIST,
});

export const setVehicleList = (payload) => ({
  type: actionTypes.SET_VEHICLE_LIST,
  payload,
});
