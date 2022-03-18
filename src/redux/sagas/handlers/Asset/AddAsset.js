import { call, put } from "redux-saga/effects";

import { addAssetApi, getAssetApi } from "../../apis/Asset/AddAsset";
import { setAddAsset, setAssetListing } from "../../../actions/Asset/AddAsset";
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
    console.log(data.data.assets);
    yield put(setAssetListing(data.data.assets));
    yield put(
      setError({
        type: "success",
        message: data.message,
      })
    );
  }

  yield call(() => localApiStateHandler(api));
}
