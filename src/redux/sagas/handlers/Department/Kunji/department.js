import { call, put } from "redux-saga/effects";

import {
  setAddDepartment,
  setDepartmentListing,
  setDepartmentStatus
} from "../../../../actions/Department/Kunji/department";
import {
  addDepartmentApi,
  departmentListingApi,
  departmentStatusApi,
} from "../../../apis/Department/Kunji/department";
import { localApiStateHandler } from "../../localApiStateHandler";
import { setError } from "../../../../actions/local";

export function* handleAddDepartment(action) {
  const { resetForm } = action.payload.formikActions;
  const { name, code, status } = action.payload.values;
  const form = new FormData();
  form.append("name", name);
  form.append("code", code);
  form.append("status", status);

  function* api() {
    const { data } = yield call(addDepartmentApi, form);
    yield put(setAddDepartment(data));
    yield call(resetForm);
    yield put(
      setError({
        type: "success",
        message: data.message,
      })
    );
  }
  yield call(() => localApiStateHandler(api));
}

export function* handleDepartmentListing() {
  function* api() {
    const { data } = yield call(departmentListingApi);
    // console.log("data", data);
    yield put(setDepartmentListing(data));
  }
  yield call(() => localApiStateHandler(api));
}

export function* handleDepartmentStatus(action) {
  const dptId = action.payload.dptId;
  const status = action.payload.status;
  // console.log(dptId, status);
  const form = new FormData();
  form.append("department_id", dptId);
  form.append("status", status);
  function* api() {
    const { data } = yield call(departmentStatusApi, form);
    yield put(setDepartmentStatus(data))
    yield put(
      setError({
        type: "success",
        message: data.message,
      })
    );
  }
  yield call(() => localApiStateHandler(api));
}
