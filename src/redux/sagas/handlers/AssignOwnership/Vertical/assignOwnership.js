import { call, put } from "redux-saga/effects";
import { setAssignAppartmentData } from "../../../../actions/AssignOwnership/Vertical/AssignOwnership";
import { assignAppartmentDataApi } from "../../../apis/AssignOwnership/Vertical/assignOwnership";
import { localApiStateHandler } from "../../localApiStateHandler";

export function* handleAssignDepartmentData() {
  function* api() {
    const { data } = yield call(assignAppartmentDataApi);
    // console.log("data", data);
    yield put(setAssignAppartmentData(data));
  }
  yield call(() => localApiStateHandler(api));
}

export default handleAssignDepartmentData;