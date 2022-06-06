import { call, put } from "redux-saga/effects";
import { push } from "connected-react-router";

import {
  saveToPersistance,
  getFromPersistance,
  deleteFromPersistance,
} from "../../../../utils/functions";
import {
  setKunjiRole,
  setKunjiRoleListing,
  setAssignPermission,
  setPermissionIds,
  setEditRole,
} from "../../../actions/KunjiRole/AddRole";
import {
  addRoleApi,
  roleListingApi,
  assignPermissionApi,
  editRoleApi,
} from "../../apis/KunjiRole/AddRole";
import { localApiStateHandler } from "../localApiStateHandler";
import { setError } from "../../../actions/local";

export function* handleAddRole(action) {
  console.log(action);
  const { values, formikActions } = action.payload;
  function* api() {
    const { data } = yield call(addRoleApi, values);
    console.log(data);
    saveToPersistance("role_id", data);
    yield put(setKunjiRole(data));
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

export function* handleRoleListing() {
  function* api() {
    const { data } = yield call(roleListingApi);
    // console.log(data);
    function* filterItems() {
      let arr = [];
      const keys = Object.keys(data);
      keys.forEach((key, index) => {
        data[key].forEach((item) => {
          arr.push(item.id);
          // console.log(item.id)
        });
      });
      yield put(setPermissionIds(arr));
    }
    yield call(filterItems);
    yield put(setKunjiRoleListing(data));
  }

  yield call(() => localApiStateHandler(api));
}

export function* handlePermissions(action) {
  console.log(action.payload);
  const state = getFromPersistance("role_id");
  console.log(state.data.id);
  const form = new FormData();
  form.append("role_id", state?.data?.id);
  action.payload.forEach((item) => {
    form.append("permissions[]", item);
  });
  function* api() {
    const { data } = yield call(assignPermissionApi, form);
    console.log(data);
    yield put(setAssignPermission(data));
    saveToPersistance("role_id", null);
    yield put(
      setError({
        type: "success",
        message: data.message,
      })
    );
    yield put(push("/View_Role"));
  }

  yield call(() => localApiStateHandler(api));
}

export function* handleEditRole(action) {
  console.log(action);
  function* api() {
    const { data } = yield call(editRoleApi, action.payload);
    console.log(data);
    function* editRoleId() {
      let roleId = [];
      for (let i = 0; i < data?.permissions?.length; i++) {
        if (data?.permissions[i].checked === true) {
          roleId.push(data?.permissions[i].id);
        }
      }
      yield put(setEditRole(roleId));
    }
    yield call(editRoleId);
  }

  yield call(() => localApiStateHandler(api));
}
