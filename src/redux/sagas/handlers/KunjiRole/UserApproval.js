import { call, put } from "redux-saga/effects";

import { setApprovalListing, setUserApproval } from "../../../actions/KunjiRole/UserApproval";
import {
  approvalListingApi,
  userApprovalApi,
} from "../../apis/KunjiRole/UserApproval";
import { localApiStateHandler } from "../localApiStateHandler";
import { setError } from "../../../actions/local";


export function* handleApprovalListing() {
  function* api() {
    const { data } = yield call(approvalListingApi);
    // console.log("data",data)
    yield put(setApprovalListing(data));
  }
  yield call(() => localApiStateHandler(api));
}

export function* handleUserApproval(action) {
  // console.log(action,"action");
  const { status, aprId } = action.payload;
  // console.log(status, aprId)
  const form = new FormData();
  form.append("status", status);
  form.append("user_id", aprId);
  // console.log(form,"form")
  function* api() {
    const { data } = yield call(userApprovalApi,form);
    console.log(data,"data here is")
    yield put(setUserApproval(data));
    yield put(
      setError({
        type: "success",
        message: data.message,
      })
    );
  }
  yield call(() => localApiStateHandler(api));
}
