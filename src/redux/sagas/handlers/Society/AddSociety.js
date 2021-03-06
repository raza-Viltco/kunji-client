import { call, put } from "redux-saga/effects";
import { push } from "connected-react-router";

import {
  getCountriesApi,
  getCitiesApi,
  addSocietyApi,
} from "../../apis/Society/AddSociety";
import {
  setCountriesData,
  setCitiesData,
  setAddSociety,
} from "../../../actions/Society/AddSociety";
import { localApiStateHandler } from "../localApiStateHandler";
import { setError } from "../../../actions/local";

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

export function* handleAddSociety(action) {
  console.log(action);
  const { resetForm } = action.payload.formikActions;
  const { society, society_admin_user, documents } = action.payload.values;
  const { nullValue } = action.payload;
  const form = new FormData();
  form.append("society[name]", society.name);
  form.append("society[country_id]", society.country_id);
  form.append("society[city_id]", society.city_id);
  form.append("society[zip_code]", society.zip_code);
  form.append("society[society_type]", society.society_type);
  form.append("society_admin_user[full_name]", society_admin_user.full_name);
  form.append("society_admin_user[address]", society_admin_user.address);
  form.append("society_admin_user[email]", society_admin_user.email);
  form.append("society_admin_user[mobile]", society_admin_user.mobile);
  documents.forEach((item) => {
    form.append("documents[]", item);
  });

  function* api() {
    const { data } = yield call(addSocietyApi, form);
    console.log(data);
    yield put(setAddSociety(data));
    yield call(resetForm);
    yield call(nullValue);
    yield put(
      setError({
        type: "success",
        message: data.message,
      })
    );
    yield put(push("/society_list"));
  }

  yield call(() => localApiStateHandler(api));
}
