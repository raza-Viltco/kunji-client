import { call, put } from "redux-saga/effects";
import { setApprovalListing } from "../../../actions/KunjiRole/UserApproval";
import { approvalListingApi } from "../../apis/KunjiRole/UserApproval";
import { localApiStateHandler } from "../localApiStateHandler";

export function* handleApprovalListing() {
  function* api() {
    const { data } = yield call(approvalListingApi);
    // console.log("data",data)
    yield put(setApprovalListing(data));
  }
  yield call(() => localApiStateHandler(api));
}
