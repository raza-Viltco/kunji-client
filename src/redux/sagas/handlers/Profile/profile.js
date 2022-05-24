import { call, put } from "redux-saga/effects";

import { localApiStateHandler } from "../localApiStateHandler";
import { viewProfileApi, updateProfileApi } from "../../apis/Profile/profile";
import {
  setViewProfile,
  setProfileUpdate,
} from "../../../actions/Profile/profile";
import { setError } from "../../../actions/local";

export function* viewProfileData() {
  function* api() {
    const { data } = yield call(viewProfileApi);
    // console.log(data);
    yield put(setViewProfile(data));
  }

  yield call(() => localApiStateHandler(api));
}

export function* handleUpdateProfile(action) {
  const { values } = action.payload;
  console.log(values);
  const { customParam } = action.payload;
  function* api() {
    const { data } = yield call(updateProfileApi, values);
    console.log(data);
    yield put(setProfileUpdate(data));
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
