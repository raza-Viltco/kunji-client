import { call, put } from "redux-saga/effects";
import { setDeliveryList } from "../../../../actions/SecurityManagement/Society/DeliveryList";
import { deliveryListApi } from "../../../apis/SecurityManagement/Society/DeliveryList";
import { localApiStateHandler } from "../../localApiStateHandler";

export function* handleDeliveryList() {
  function* api() {
    const { data } = yield call(deliveryListApi);
    yield put(setDeliveryList(data));
  }
  yield call(() => localApiStateHandler(api));
}
