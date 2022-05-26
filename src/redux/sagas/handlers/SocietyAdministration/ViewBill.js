import { call, put } from "redux-saga/effects";

import { localApiStateHandler } from "../localApiStateHandler";
import { viewBillApi } from "../../apis/SocietyAdministration/ViewBill";
import { setViewBill } from "../../../actions/SocietyAdministration/ViewBill";

export function* handleViewBill() {
  function* api() {
    const { data } = yield call(viewBillApi);
    yield put(setViewBill(data));
  }
  yield call(() => localApiStateHandler(api));
}
