import { call, put } from "redux-saga/effects";
import { setChargesList } from "../../../actions/SocietyAdministration/ChargesList";
import { chargesListApi } from "../../apis/SocietyAdministration/ChargesList";
import { localApiStateHandler } from "../localApiStateHandler";

export function* handleChargesList() {
  function* api() {
    const { data } = yield call(chargesListApi);
    console.log(data)
    yield put(setChargesList(data));
  }
  yield call(() => localApiStateHandler(api));
}
