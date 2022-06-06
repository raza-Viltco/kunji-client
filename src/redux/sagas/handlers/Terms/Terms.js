import { call, put } from "redux-saga/effects";
import { push } from "connected-react-router";

import { localApiStateHandler } from "../localApiStateHandler";
import { setError } from "../../../actions/local";
import { termsApi, termsDataApi } from "../../apis/Terms/Terms";
import { setTerms, setTermsData } from "../../../actions/Terms.js/Terms";

export function* handleTerms(action) {
  console.log(action, "action");
  const { resetForm } = action.payload.formikActions;
  const { terms_conditions } = action.payload.values;
  const form = new FormData();
  form.append("terms_conditions", terms_conditions);

  function* api() {
    const { data } = yield call(termsApi, form);
    // yield call(resetForm);
    yield put(setTerms(data));
    // yield put(
    //   setError({
    //     type: "success",
    //     message: data.message,
    //   })
    // );
  }
  yield call(() => localApiStateHandler(api));
}

export function* handleTermsData(action) {
  function* api() {
    const { data } = yield call(termsDataApi);

    yield put(setTermsData(data));
  }

  yield call(() => localApiStateHandler(api));
}
