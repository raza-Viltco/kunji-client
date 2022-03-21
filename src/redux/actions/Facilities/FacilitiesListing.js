import { actionTypes } from "../action-types";

export const facilitiesListing = () => ({
  type: actionTypes.FACILITIES_LIST,
});

export const setFacilitiesListing = (payload) => ({
  type: actionTypes.SET_FACILITIES_LIST,
  payload,
});
