import { call, put } from "redux-saga/effects";

import {
  getSocietiesApi,
  editSocietyListApi,
} from "../../apis/Society/SocietyListing";
import {
  setSocietyList,
  setEditSocietyList,
} from "../../../actions/Society/SocietyListing";
import { localApiStateHandler } from "../localApiStateHandler";

export function* handleSocieties() {
  function* api() {
    const { data } = yield call(getSocietiesApi);
    yield put(setSocietyList(data));
  }
  yield call(() => localApiStateHandler(api));
}

export function* handleEditSociety(action) {
  console.log(action);
  function* api() {
    const { data } = yield call(editSocietyListApi, action.payload);
    console.log(data);
    yield put(setEditSocietyList(data?.data));
  }

  yield call(() => localApiStateHandler(api));
}
