import { call, put } from "redux-saga/effects";

import {
  addAssetApi,
  getAssetApi,
  editAssetApi,
  updateAssetApi,
  removeAssetApi,
} from "../../apis/Asset/AddAsset";
import {
  setAddAsset,
  setAssetListing,
  setEditAsset,
  setUpdateAsset,
  setRemoveAsset
} from "../../../actions/Asset/AddAsset";
import { localApiStateHandler } from "../localApiStateHandler";
import { setError } from "../../../actions/local";

export function* handleAddAsset(action) {
  console.log(action);
  const { resetForm } = action.payload.formikActions;
  function* api() {
    const { data } = yield call(addAssetApi, action.payload.values);
    console.log(data);
    yield put(setAddAsset(data.data));
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

export function* handleUpdateAsset(action) {
  console.log(action);
  const { values, customParam } = action.payload;
  const form = new FormData();
  form.append("id", values.id);
  form.append("name", values.name);
  form.append("location", values.location);
  form.append("quantity", values.quantity);

  function* api() {
    const { data } = yield call(updateAssetApi, form);
    console.log(data);
    yield put(setUpdateAsset(data));
    yield call(customParam);
    yield put(
      setError({
        type: "success",
        message: data.message,
      })
    );
  }

  yield call(() => localApiStateHandler(api));
}

export function* handleRemoveAsset(action) {
  console.log(action);
  const form = new FormData();
  form.append("id", action.payload);
  function* api() {
    const { data } = yield call(removeAssetApi, form);
    console.log(data);
    yield put(setRemoveAsset(data));
    yield put(
      setError({
        type: "success",
        message: data.message,
      })
    );
  }

  yield call(() => localApiStateHandler(api));
}
