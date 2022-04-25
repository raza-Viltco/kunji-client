import { call, put } from "redux-saga/effects";
import { setServantApprovalList } from "../../../../actions/SecurityManagement/Society/servantApproval";
import { setGateApprovalList } from "../../../../actions/SecurityManagement/Society/GatePassApproval";
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
  // console.log(action,"action");
  // const { status, aprId } = action.payload;
  // console.log(status, aprId)
  // const form = new FormData();
  // form.append("status", status);
  // form.append("user_id", aprId);
  // console.log(form,"form")
  function* api() {
    const { data } = yield call(servantApprovalApi, action.payload);
    // console.log(data,"data here is")
    // yield put(setServantApproval(data));
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
