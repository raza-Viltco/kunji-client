import { call, put } from "redux-saga/effects";

import { getCasesApi } from "../../../apis/SecurityManagement/Society/Complaints";
import { setComplaintCases } from "../../../../actions/SecurityManagement/Society/Complaints";
import { localApiStateHandler } from "../../localApiStateHandler";

export function* handleCases() {
  function* api() {
    const { data } = yield call(getCasesApi);
    // console.log(data);
    yield put(setComplaintCases(data));
  }

  yield call(() => localApiStateHandler(api));
}
