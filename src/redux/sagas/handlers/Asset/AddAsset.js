import { call, put } from "redux-saga/effects";

import {
  addAssetApi,
  getAssetApi,
  editAssetApi,
} from "../../apis/Asset/AddAsset";
import {
  setAddAsset,
  setAssetListing,
  setEditAsset,
} from "../../../actions/Asset/AddAsset";
import { localApiStateHandler } from "../localApiStateHandler";
import { setError } from "../../../actions/local";

export function* handleAddAsset(action) {
  console.log(action);
  const { resetForm } = action.payload.formikActions;
  function* api() {
    const { data } = yield call(addAssetApi, action.payload.values);
    console.log(data);
    yield put(setAddAsset(data));
    yield call(resetForm);
    yield put(
      setError({
        type: "success",
        message: data.message,
      })
    );
  }

  yield call(() => localApiStateHandler(api));
}

export function* handleAssetList() {
  function* api() {
    const { data } = yield call(getAssetApi);
    console.log(data);
    yield put(setAssetListing(data));
  }

  yield call(() => localApiStateHandler(api));
}

export function* handleAssetEdit(action) {
  console.log(action);
  function* api() {
    const { data } = yield call(editAssetApi, action.payload);
    console.log(data);
    yield put(setEditAsset(data.assets));
  }

  yield call(() => localApiStateHandler(api));
}
