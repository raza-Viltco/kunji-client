import { call, put } from "redux-saga/effects";

import {
  staffListApi,
  userCreationApi,
  userDepartmentApi,
} from "../../apis/KunjiRole/UserCreation";
import { localApiStateHandler } from "../localApiStateHandler";
import {
  setStaffList,
  setUserCreation,
  setUserDepartment,
} from "../../../actions/KunjiRole/UserCreation";
import { setError } from "../../../actions/local";
import staffListing from "../../../../pages/PrivatePages/UserManagement/Kunji/UserCreation/staffListing";

export function* handleUserDepartment() {
  function* api() {
    const { data } = yield call(userDepartmentApi);
    yield put(setUserDepartment(data));
  }
  yield call(() => localApiStateHandler(api));
}

export function* handleUserCreation(action) {
  const { resetForm } = action.payload.formikActions;

  const {
    first_name,
    last_name,
    email,
    password,
    mobile,
    cnic,
    department_id,
    role_id,
  } = action.payload.values;

  const form = new FormData();

  form.append("first_name", first_name);
  form.append("last_name", last_name);
  form.append("email", email);
  form.append("password", password);
  form.append("mobile", mobile);
  form.append("cnic", cnic);
  form.append("department_id", department_id);
  form.append("role_id", role_id);

  function* api() {
    const { data } = yield call(userCreationApi, form);

    yield put(setUserCreation(data));
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


export function* handleStaffList() {
  function* api() {
    const { data } = yield call(staffListApi);
    yield put(setStaffList(data));
  }
  yield call(() => localApiStateHandler(api));
}