import { call, put } from "redux-saga/effects";
import { setSocietyDashboard } from "../../../actions/SocietyDashboard/SocietyDashboard";
import { societyDashboardApi } from "../../apis/SocietyDashboard/SocietyDashboard";
import { localApiStateHandler } from "../localApiStateHandler";



export function* handleSocietyDashboard(action) {
  function* api() {
    const { data } = yield call(societyDashboardApi);

    yield put(setSocietyDashboard(data));
  }

  yield call(() => localApiStateHandler(api));
}
