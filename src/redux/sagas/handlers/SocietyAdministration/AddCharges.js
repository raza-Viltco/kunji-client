import { call, put } from "redux-saga/effects";

import { setError } from "../../../actions/local";
import { addChargesApi } from "../../apis/SocietyAdministration/AddCharges";
import { setAddCharges} from "../../../actions/SocietyAdministration/AddCharges";
import { localApiStateHandler } from "../localApiStateHandler";

export function* handleAddCharges(action) {
  const { formikActions, values } = action.payload;
  function* api() {
    const { data } = yield call(addChargesApi, values);
    yield put(setAddCharges(data.data));
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
