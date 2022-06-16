import { put, call } from "redux-saga/effects";

import { localApiStateHandler } from "../localApiStateHandler";
import { setError } from "../../../actions/local";
import {
  createContactsApi,
  emergencyContactsApi,
} from "../../apis/EmergencyContacts/EmergencyContacts";
import {
  setContactsList,
  setCreateContacts,
} from "../../../actions/EmergencyContacts/EmergencyContacts";

export function* handleEmergencyContacts() {
  function* api() {
    const { data } = yield call(emergencyContactsApi);
    yield put(setContactsList(data));
  }
  yield call(() => localApiStateHandler(api));
}
export function* handleCreateContacts(action) {
  const { resetForm } = action.payload.formikActions;
  const { emergency_contact } = action.payload.values;
  const form = new FormData();
  emergency_contact.forEach((item) => {
    form.append("contact[]", item);
  });

  function* api() {
    const { data } = yield call(createContactsApi, form);
    console.log(data.message, "date here us we");
    // yield put(setCreateContacts(data));
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
