import { call, put } from "redux-saga/effects";

import { localApiStateHandler } from "../localApiStateHandler";
import { viewProfileApi } from "../../apis/Profile/profile";
import { setViewProfile } from "../../../actions/Profile/profile";

export function* viewProfileData() {
  function* api() {
    const { data } = yield call(viewProfileApi);
    console.log(data);
    yield put(setViewProfile(data));
  }

  yield call(() => localApiStateHandler(api));
}
