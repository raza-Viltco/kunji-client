import { call, put } from "redux-saga/effects";

import {
  getCasesApi,
  caseDetailApi,
  caseReplyApi,
} from "../../../apis/SecurityManagement/Society/Complaints";
import {
  setComplaintCases,
  setComplaintDetail,
  setComplaintReply,
} from "../../../../actions/SecurityManagement/Society/Complaints";
import { localApiStateHandler } from "../../localApiStateHandler";
import { setError } from "../../../../actions/local";

export function* handleCases() {
  function* api() {
    const { data } = yield call(getCasesApi);
    // console.log(data);
    yield put(setComplaintCases(data));
  }

  yield call(() => localApiStateHandler(api));
}

export function* handleCaseDetail(action) {
  // console.log(action);
  function* api() {
    const { data } = yield call(caseDetailApi, action.payload);
    console.log(data);
    yield put(setComplaintDetail(data));
  }

  yield call(() => localApiStateHandler(api));
}

export function* handleCaseReply(action) {
  console.log(action);
  const { caseId, values, formikActions } = action.payload;
  const form = new FormData();
  form.append("complaint_id", caseId);
  form.append("comment", values.comment);
  function* api() {
    const { data } = yield call(caseReplyApi, form);
    console.log(data);
    yield put(setComplaintReply(data));
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
