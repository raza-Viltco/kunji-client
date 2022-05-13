import { call, put } from "redux-saga/effects";
import {
  setBillList,
  setResidentDrop,
  setSelectResident,
} from "../../../actions/SocietyAdministration/GenerateBill";
import {
  billListApi,
  generateBillApi,
  selectResidentApi,
} from "../../apis/SocietyAdministration/GenerateBill";
import { localApiStateHandler } from "../localApiStateHandler";
import { setError } from "../../../actions/local";

export function* handleSelectResident() {
  function* api() {
    const { data } = yield call(selectResidentApi);
    console.log(data)
    // function* residentDropDown() {
    //   const residentsOption = [];
    //   for (let i = 0; i < data?.length; i++) {
    //     const Obj = { value: "", label: "" };
    //     const newData = data[i].resedent;
    //     Obj.value = newData.id;
    //     Obj.label = newData.name;
    //     residentsOption.push(Obj);
    //   }
    //   yield put(setResidentDrop(residentsOption));
    // }
    // yield call(residentDropDown); 

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

export function* handleBillList() {
  function* api() {
    const { data } = yield call(billListApi);
    yield put(setBillList(data));
  }
  yield call(() => localApiStateHandler(api));
}
