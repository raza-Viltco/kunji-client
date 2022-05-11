import { call, put } from "redux-saga/effects";
import { setSelectResident } from "../../../actions/SocietyAdministration/GenerateBill";
import {
  generateBillApi,
  selectResidentApi,
} from "../../apis/SocietyAdministration/GenerateBill";
import { localApiStateHandler } from "../localApiStateHandler";
import { setError } from "../../../actions/local";

export function* handleSelectResident() {
  function* api() {
    const { data } = yield call(selectResidentApi);
    yield put(setSelectResident(data));
  }
  yield call(() => localApiStateHandler(api));
}

export function* handleGenerateBill(action) {
  console.log(action, "action");
  const { formikActions, values } = action.payload;
  const form = new FormData();
  form.append("resident_id", values.resident_id);
  form.append("selected_charges_id", values.selected_charges_id);
  form.append("due_date", values.due_date);
  function* api() {
    const { data } = yield call(generateBillApi, values);
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
