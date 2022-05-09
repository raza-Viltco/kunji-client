import { call, put } from "redux-saga/effects";

import {
  setCreatePoll,
  setPollList,
  setViewPoll,
} from "../../../actions/Poll/Poll";
import { createPollApi, pollListApi, viewPollApi } from "../../apis/Poll/Poll";
import { localApiStateHandler } from "../localApiStateHandler";
import { setError } from "../../../actions/local";

export function* handlePollList() {
  function* api() {
    const { data } = yield call(pollListApi);
    yield put(setPollList(data));
  }

  yield call(() => localApiStateHandler(api));
}

export function* handleCreatePoll(action) {
  // console.log(action, "actions are here");
  const { resetForm } = action.payload.formikActions;
  const { question, valid_days, options } = action.payload.values;
  const form = new FormData();
  form.append("question", question);
  form.append("valid_days", valid_days);

  options.forEach((item) => {
    form.append("options[]", item);
  });

  function* api() {
    const { data } = yield call(createPollApi, form);
    yield put(setCreatePoll(data));
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

export function* handleViewPoll(action) {
  function* api() {
    const { data } = yield call(viewPollApi, action.payload);
    yield put(setViewPoll(data));
  }

  yield call(() => localApiStateHandler(api));
}
