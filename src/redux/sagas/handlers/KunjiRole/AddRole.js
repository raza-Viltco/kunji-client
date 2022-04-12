import { call, put } from "redux-saga/effects";

import { setKunjiRole } from "../../../actions/KunjiRole/AddRole";
import { addRoleApi, roleListingApi } from "../../apis/KunjiRole/AddRole";
import { localApiStateHandler } from "../localApiStateHandler";
import { setError } from "../../../actions/local";

export function* handleAddRole(action) {
  console.log(action);
  const { values, formikActions } = action.payload;
  function* api() {
    const { data } = yield call(addRoleApi, values);
    console.log(data);
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
  function* api(){
    const {data} = yield call(roleListingApi);
    console.log(data);
  }

  yield call(() => localApiStateHandler(api))
}