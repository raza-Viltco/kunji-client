import { call, put } from "redux-saga/effects";

import { setGateApprovalList } from "../../../../actions/SecurityManagement/Society/GatePassApproval";
import {
  setServantApproval,
  setServantApprovalList,
} from "../../../../actions/SecurityManagement/Society/servantApproval";
import {
  servantApprovalApi,
  servantListAPi,
  gatePassApprovalApi,
} from "../../../apis/SecurityManagement/Society/servantApproval";
import { localApiStateHandler } from "../../localApiStateHandler";
import { setError } from "../../../../actions/local";

export function* handleServantApproval() {
  function* api() {
    const { data } = yield call(servantListAPi);
    // console.log("data",data)
    yield put(setServantApprovalList(data));
  }

  yield call(() => localApiStateHandler(api));
}

export function* handleServantApprove(action) {
  const { servantId, status } = action.payload;
  const form = new FormData();
  form.append("id", servantId);
  form.append("status", status);

  function* api() {
    const { data } = yield call(servantApprovalApi, form);
    yield put(setServantApproval(data));

    yield put(
      setError({
        type: "success",
        message: data.message,
      })
    );
  }
  yield call(() => localApiStateHandler(api));
}

export function* handleGatePassApproval() {
  function* api() {
    const { data } = yield call(gatePassApprovalApi);
    console.log(data);
    yield put(setGateApprovalList(data));
  }

  yield call(() => localApiStateHandler(api));
}
