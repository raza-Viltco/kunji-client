import { call, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import {
  setSocietyStatus,
  setViewSociety,
} from "../../../actions/Society/ViewSociety";
import {
  societyStatusApi,
  viewSocietyApi,
} from "../../apis/Society/ViewSociety";
import { localApiStateHandler } from "../localApiStateHandler";
import { setError } from "../../../actions/local";

export function* handleViewSociety(action) {
  function* api() {
    const { data } = yield call(viewSocietyApi, action.payload);
    yield put(setViewSociety(data));
  }
  yield call(() => localApiStateHandler(api));
}

export function* handleSocietyStatus(action) {
  console.log(action, "actions");
  function* api() {
    const { data } = yield call(societyStatusApi, action.payload);
    yield put(setSocietyStatus(data));

    yield put(
      setError({
        type: "success",
        message: data.message,
      })
    );
    yield put(push("/society_list"));
  }
  yield call(() => localApiStateHandler(api));
}
