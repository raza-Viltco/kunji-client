import { call, put } from "redux-saga/effects";

import { getSocietyProfileApi } from "../../apis/Society/SocietyProfile";
import { setSocietyProfile } from "../../../actions/Society/SocietyProfile";
import { localApiStateHandler } from "../localApiStateHandler";

export function* handleSocietyProfile() {
  function* api() {
    const { data } = yield call(getSocietyProfileApi);
    yield put(setSocietyProfile(data));
  }
  yield call(() => localApiStateHandler(api));
}
