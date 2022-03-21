import { put, call } from "redux-saga/effects";

import { getFacilitiesApi } from "../../apis/Facilities/AddFacilities";
import { setFacilitiesListing } from "../../../actions/Facilities/FacilitiesListing";
import { localApiStateHandler } from "../localApiStateHandler";
import { setError } from "../../../actions/local";

export function* handleFacilityList() {
  function* api() {
    const { data } = yield call(getFacilitiesApi);
    console.log(data.data.facilities);
    yield put(setFacilitiesListing(data.data.facilities));
    yield put(
      setError({
        type: "success",
        message: data.message,
      })
    );
  }

  yield call(() => localApiStateHandler(api));
}
