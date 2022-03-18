import { call, put } from "redux-saga/effects";
import { localApiStateHandler } from "../localApiStateHandler";
import { viewProfileApi } from "../../apis/Profile/profile";
import { setViewProfile } from "../../../actions/Profile/profile";

export function* viewProfileData(action) {
  function* api() {
    const { profileData } = yield call(viewProfileApi, action.payload);
    console.log(profileData);
    yield put(setViewProfile(profileData));
  }

  yield call(() => localApiStateHandler(api));
}
