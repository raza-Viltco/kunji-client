import { call, put } from "redux-saga/effects";

import { setAssignAppartmentData } from "../../../../actions/AssignOwnership/Vertical/AssignOwnership";
import { assignAppartmentDataApi } from "../../../apis/AssignOwnership/Vertical/assignOwnership";
import { localApiStateHandler } from "../../localApiStateHandler";
import { propertyListApi } from "../../../apis/AssignOwnership/Vertical/assignOwnership";
import { setPropertyList } from "../../../../actions/AssignOwnership/Vertical/AssignOwnership";

export function* handleAssignDepartmentData() {
  function* api() {
    const { data } = yield call(assignAppartmentDataApi);
    // console.log("data", data);
    yield put(setAssignAppartmentData(data));
  }
  yield call(() => localApiStateHandler(api));
}
export default handleAssignDepartmentData;


export function* handlePropertyList() {
  function* api() {
    const { data } = yield call(propertyListApi);
    // console.log("data", data);
    yield put(setPropertyList(data));
  }
  yield call(() => localApiStateHandler(api));
}


