import { call, put } from "redux-saga/effects";

import {
  addBuildingApi,
  getBuildingApi,
} from "../../apis/SocietyConfiguration/SocietyConfig";
import {
  setAddBuilding,
  setHorizontalBuilding,
  setBuildingData,
} from "../../../actions/SocietyConfiguration/SocietyConfiguration";
import { localApiStateHandler } from "../localApiStateHandler";
import { setError } from "../../../actions/local";

export function* handleBuilding(action) {
  console.log(action);
  const { formikActions, values } = action.payload;
  function* api() {
    const data = yield call(addBuildingApi, values);
    console.log(data);
    yield put(setAddBuilding(data));
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
    yield put(setHorizontalBuilding(data));
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
