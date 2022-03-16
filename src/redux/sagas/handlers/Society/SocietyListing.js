import { call, put } from "redux-saga/effects";

import { getSocietiesApi } from "../../apis/Society/SocietyListing";
import { setSocietyList } from "../../../actions/Society/SocietyListing";
import { localApiStateHandler } from "../localApiStateHandler";

export function* handleSocieties() {
  function* api() {
    const { data } = yield call(getSocietiesApi);
    yield put(setSocietyList(data));
  }
  yield call(() => localApiStateHandler(api));
}
