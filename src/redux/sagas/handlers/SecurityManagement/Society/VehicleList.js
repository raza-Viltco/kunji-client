import { call, put } from "redux-saga/effects";
import { setVehicleList } from "../../../../actions/SecurityManagement/Society/VehicleList";
import { vehicleListApi } from "../../../apis/SecurityManagement/Society/VehicelList";
import { localApiStateHandler } from "../../localApiStateHandler";

export function* handleVehicleList() {
  function* api() {
    const { data } = yield call(vehicleListApi);
    yield put(setVehicleList(data));
  }
  yield call(() => localApiStateHandler(api));
}
