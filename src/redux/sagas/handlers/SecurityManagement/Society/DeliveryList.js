import { call, put } from "redux-saga/effects";
import {
  setDeliveryList,
  setNotifyResident,
} from "../../../../actions/SecurityManagement/Society/DeliveryList";
import {
  deliveryListApi,
  notifyResidentApi,
} from "../../../apis/SecurityManagement/Society/DeliveryList";
import { localApiStateHandler } from "../../localApiStateHandler";
import { setError } from "../../../../actions/local";

export function* handleDeliveryList() {
  function* api() {
    const { data } = yield call(deliveryListApi);
    yield put(setDeliveryList(data));
  }
  yield call(() => localApiStateHandler(api));
}

export function* handleNotifyResident(action) {
  function* api() {
    const { data } = yield call(notifyResidentApi, action.payload);
    yield put(
      setError({
        type: "success",
        message: data.message,
      })
    );
  }

  yield call(() => localApiStateHandler(api));
}
