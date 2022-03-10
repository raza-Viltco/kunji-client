import { actionTypes } from "../../actions/action-types";

const initialState = {
  countryData: [],
  cityData: [],
  cityId: "",
};

const addSocietyReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_COUNTRIES_DATA:
      return { ...state, countryData: payload };
    case actionTypes.SET_CITY_DATA:
      return { ...state, cityData: payload };
    case actionTypes.SET_CITY_ID:
      return { ...state, cityId: payload };
    default:
      return state;
  }
};

export default addSocietyReducer;
