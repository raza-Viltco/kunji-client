import { call, put } from "redux-saga/effects";
import { setPanicAlert } from "../../../../actions/SecurityManagement/Society/PanicAlert";
import { panicAlertList } from "../../../apis/SecurityManagement/Society/PanicAlert";
import { localApiStateHandler } from "../../localApiStateHandler";

export function* handlePanicAlert() {
  function* api() {
    const { data } = yield call(panicAlertList);
    yield put(setPanicAlert(data));
  }
  yield call(() => localApiStateHandler(api));
}
