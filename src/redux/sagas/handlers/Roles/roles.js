import { put, call } from "redux-saga/effects";
import { setError } from "../../../actions/local";
import { setViewRoles } from "../../../actions/Roles/roles";
import { viewRolesApi } from "../../apis/Roles/roles";
import { localApiStateHandler } from "../localApiStateHandler";

export function* handleViewRoles() {
  function* api() {
    const { data } = yield call(viewRolesApi);
    yield put(setViewRoles);
    yield put(
      setError({
        type: "success",
        message: data.message,
      })
    );
  }
  yield call(() => localApiStateHandler(api));
}
