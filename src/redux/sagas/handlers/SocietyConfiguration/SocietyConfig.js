import { call, put } from "redux-saga/effects";

import {
  addBuildingApi,
  getBuildingApi,
  getFloorApi,
  areaMappingApi,
  plotListApi,
  apartmentListApi,
} from "../../apis/SocietyConfiguration/SocietyConfig";
import {
  setAddBuilding,
  setHorizontalBuilding,
  setBuildingData,
  setFloorData,
  setAreaMapping,
  setVerticalMapping,
  setPlotList,
  setAppartmentList,
} from "../../../actions/SocietyConfiguration/SocietyConfiguration";
import { localApiStateHandler } from "../localApiStateHandler";
import { setError } from "../../../actions/local";

export function* handleBuilding(action) {
  console.log(action);
  const { formikActions, values } = action.payload;
  function* api() {
    const data = yield call(addBuildingApi, values);
    console.log(data);
    yield put(setAddBuilding(data.data));
    yield call(formikActions.resetForm);
    yield put(
      setError({
        type: "success",
        message: data.data.message,
      })
    );
  }

  yield call(() => localApiStateHandler(api));
}

export function* handleHorizontalBuilding(action) {
  console.log(action);
  const { formikActions, values } = action.payload;
  function* api() {
    const data = yield call(addBuildingApi, values);
    console.log(data);
    yield put(setHorizontalBuilding(data.data));
    yield call(formikActions.resetForm);
    yield put(
      setError({
        type: "success",
        message: data.data.message,
      })
    );
  }

  yield call(() => localApiStateHandler(api));
}

export function* handleBuildingData() {
  function* api() {
    const data = yield call(getBuildingApi);
    console.log(data);
    yield put(setBuildingData(data.data));
  }

  yield call(() => localApiStateHandler(api));
}

export function* handleFloorData(action) {
  console.log(action);
  function* api() {
    const { data } = yield call(getFloorApi, action.payload);
    console.log(data);
    yield put(setFloorData(data));
  }

  yield call(() => localApiStateHandler(api));
}

export function* handleAreaMapping(action) {
  console.log(action);
  const { formikActions, values } = action.payload;
  const form = new FormData();
  form.append("mapping_two_id", values.floor);
  form.append("plot_home_apartment", values.plot);
  form.append("parking", 0);
  function* api() {
    const { data } = yield call(areaMappingApi, form);
    console.log(data);
    yield put(setAreaMapping(data.data));
    yield call(formikActions.resetForm);
    yield put(
      setError({
        type: "success",
        message: data.message,
      })
    );
  }

  yield call(() => localApiStateHandler(api));
}

export function* handleVerticalMapping(action) {
  console.log(action);
  const { formikActions, values } = action.payload;
  const form = new FormData();
  form.append("mapping_two_id", values.floor);
  form.append("plot_home_apartment", values.plot);
  form.append("parking", values.parking);
  function* api() {
    const { data } = yield call(areaMappingApi, form);
    console.log(data);
    yield put(setVerticalMapping(data.data));
    yield call(formikActions.resetForm);
    yield put(
      setError({
        type: "success",
        message: data.message,
      })
    );
  }

  yield call(() => localApiStateHandler(api));
}

export function* handleAppartmentList() {
  function* api() {
    const data = yield call(apartmentListApi);
    yield put(setAppartmentList(data.data));
  }

  yield call(() => localApiStateHandler(api));
}
