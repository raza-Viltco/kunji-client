import { call, put } from "redux-saga/effects";

import { setError } from "../../../actions/local";
import { createNoticeApi } from "../../apis/Notice/Notice";
import { localApiStateHandler } from "../localApiStateHandler";

export function* handleCreateNotice(action) {
  //   console.log(action, "action here");
  const { notice_title, notice_detail, residents } = action.payload;
  const form = new FormData();
  form.append("notice_title", notice_title);
  form.append("notice_detail", notice_detail);
  residents?.forEach((item) => {
    form.append("user_id[]", item.value);
  });
  console.log(form, "form");
  function* api() {
    const { data } = yield call(createNoticeApi, form);
    yield put(
      setError({
        type: "success",
        message: data.message,
      })
    );
  }
  yield call(() => localApiStateHandler(api));
}
