import { call, put } from "redux-saga/effects";
import { setVisitorList } from "../../../../actions/SecurityManagement/Society/VisitorList";
import { visitorListApi } from "../../../apis/SecurityManagement/Society/VisitorList";
import { localApiStateHandler } from "../../localApiStateHandler";

export function* handleVisitorList() {
  function* api() {
    const { data } = yield call(visitorListApi);
    yield put(setVisitorList(data));
  }
  yield call(() => localApiStateHandler(api));
}
