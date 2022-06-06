import { call, put } from "redux-saga/effects";
import { push } from "connected-react-router";

import { localApiStateHandler } from "../localApiStateHandler";
import { setError } from "../../../actions/local";
import { termsApi } from "../../apis/Terms/Terms";

export function* handleTerms(action) {
  console.log(action, "action");
  const { resetForm } = action.payload.formikActions;
  const { terms_conditions } = action.payload.values;
  const form = new FormData();
  form.append("terms_conditions", terms_conditions);

  function* api() {
    const { data } = yield call(termsApi, form);
    yield call(resetForm);
    // yield put(
    //   setError({
    //     type: "success",
    //     message: data.message,
    //   })
    // );
  }
  yield call(() => localApiStateHandler(api));
}
