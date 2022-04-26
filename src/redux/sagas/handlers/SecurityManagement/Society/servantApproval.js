import { call, put } from "redux-saga/effects";

import {
  setGateApprovalList,
  setGatePassApproval,
} from "../../../../actions/SecurityManagement/Society/GatePassApproval";
import {
  setServantApproval,
  setServantApprovalList,
} from "../../../../actions/SecurityManagement/Society/servantApproval";
import {
  servantApprovalApi,
  servantListAPi,
  gatePassListApi,
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
    const { data } = yield call(gatePassListApi);
    console.log(data);
    yield put(setGateApprovalList(data));
  }

  yield call(() => localApiStateHandler(api));
}

export function* handleGatePassRequest(action) {
  console.log(action);
  const { id, status } = action.payload;
  const form = new FormData();
  form.append("gatepass_id", id);
  form.append("status", status);
  function* api() {
    const { data } = yield call(gatePassApprovalApi, form);
    console.log(data);
    yield put(setGatePassApproval(data));
    yield put(
      setError({
        type: "success",
        message: data.message,
      })
    );
  }

  yield call(() => localApiStateHandler(api));
}
