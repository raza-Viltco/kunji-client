import { actionTypes } from "../action-types";

export const countriesData = () => ({
  type: actionTypes.COUNTRIES_DATA,
});

export const setCountriesData = (payload) => ({
  type: actionTypes.SET_COUNTRIES_DATA,
  payload,
});

export const citiesData = (payload) => ({
  type: actionTypes.CITY_DATA,
  payload,
});

export const setCitiesData = (payload) => ({
  type: actionTypes.SET_CITY_DATA,
  payload,
});

export const setCityId = (payload) => ({
  type: actionTypes.SET_CITY_ID,
  payload,
});

export const addSociety = (payload) => ({
  type: actionTypes.ADD_SOCIETY,
  payload,
});

export const setAddSociety = (payload) => ({
  type: actionTypes.SET_ADD_SOCIETY,
  payload,
});
