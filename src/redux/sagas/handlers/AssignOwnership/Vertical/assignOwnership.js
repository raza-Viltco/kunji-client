import { call, put } from "redux-saga/effects";

import {
  setAssignAppartmentData,
  setAssignOwnership,
  setOwnerData,
} from "../../../../actions/AssignOwnership/Vertical/AssignOwnership";
import {
  assignAppartmentDataApi,
  assignOwnershipApi,
  ownerDataApi,
} from "../../../apis/AssignOwnership/Vertical/assignOwnership";
import { localApiStateHandler } from "../../localApiStateHandler";
import { propertyListApi } from "../../../apis/AssignOwnership/Vertical/assignOwnership";
import { setPropertyList } from "../../../../actions/AssignOwnership/Vertical/AssignOwnership";
import { setError } from "../../../../actions/local";

export function* handleAssignDepartmentData(action) {
  function* api() {
    const { data } = yield call(assignAppartmentDataApi, action.payload);

    yield put(setAssignAppartmentData(data));
  }
  yield call(() => localApiStateHandler(api));
}
export default handleAssignDepartmentData;

export function* handlePropertyList() {
  function* api() {
    const { data } = yield call(propertyListApi);
    yield put(setPropertyList(data));
  }
  yield call(() => localApiStateHandler(api));
}

export function* handleOwnerData(action) {
  function* api() {
    const { data } = yield call(ownerDataApi, action.payload);
    yield put(setOwnerData(data));
  }
  yield call(() => localApiStateHandler(api));
}


export function* handleOwnership(action) {
  // console.log(action);
  const { values, formikActions } = action.payload;
  function* api() {
    const { data } = yield call(assignOwnershipApi, values);
    yield put(setAssignOwnership(data));
    yield call(formikActions.resetForm);
    yield put(
      setError({
        type: "success",
        message: data.message,
      })
    );
  }

  yield call(() => localApiStateHandler(api));
}
