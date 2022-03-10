import { call, put } from "redux-saga/effects";

import { getCountriesApi, getCitiesApi } from "../../apis/Society/AddSociety";
import {
  setCountriesData,
  setCitiesData,
} from "../../../actions/Society/AddSociety";
import { localApiStateHandler } from "../localApiStateHandler";

export function* handleCountries() {
  function* api() {
    const { data } = yield call(getCountriesApi);
    yield put(setCountriesData(data));
  }

  yield call(() => localApiStateHandler(api));
}

export function* handleCities(action) {
  function* api() {
    const { data } = yield call(getCitiesApi, action.payload);
    console.log(data);
    yield put(setCitiesData(data));
  }

  yield call(() => localApiStateHandler(api));
}
