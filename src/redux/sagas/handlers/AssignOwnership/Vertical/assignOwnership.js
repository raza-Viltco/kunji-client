import { call, put } from "redux-saga/effects";
import { push } from "connected-react-router";

import {
  setApproveProperty,
  setAssignAppartmentData,
  setAssignOwnership,
  setOwnerData,
  setOwnershipList,
  setViewOwnership,
} from "../../../../actions/AssignOwnership/Vertical/AssignOwnership";
import {
  approvePropertyApi,
  assignAppartmentDataApi,
  assignOwnershipApi,
  ownerDataApi,
  ownershipListApi,
  viewOwnershipApi,
} from "../../../apis/AssignOwnership/Vertical/assignOwnership";
import { localApiStateHandler } from "../../localApiStateHandler";
import { propertyListApi } from "../../../apis/AssignOwnership/Vertical/assignOwnership";
import { setPropertyList } from "../../../../actions/AssignOwnership/Vertical/AssignOwnership";
import { setError } from "../../../../actions/local";

export function* handleAssignDepartmentData(action) {
  console.log(action);
  function* api() {
    const { data } = yield call(assignAppartmentDataApi, action.payload);

    yield put(setAssignAppartmentData(data));
  }
  yield call(() => localApiStateHandler(api));
}
// export default handleAssignDepartmentData;

export function* handlePropertyList() {
  function* api() {
    const { data } = yield call(propertyListApi);
    yield put(setPropertyList(data));
  }
  yield call(() => localApiStateHandler(api));
}

export function* handleOwnerData(action) {
  function* api() {
    const { data } = yield call(ownerDataApi, action.payload);
    yield put(setOwnerData(data));
    if (data.message) {
      yield put(
        setError({
          type: "success",
          message: data.message,
        })
      );
    }
  }
  yield call(() => localApiStateHandler(api));
}

export function* handleOwnership(action) {
  console.log(action);
  const { values, formikActions, nullValue } = action.payload;
  function* setVal() {
    formikActions.setFieldValue("sector_block_building", "");
    formikActions.setFieldValue("floor_streets", "");
    formikActions.setFieldValue("plot_home_apartment", "");
  }
  const form = new FormData();
  form.append("first_name", values.owner_first_name);
  form.append("last_name", values.owner_last_name);
  form.append("cnic", values.cnic);
  form.append("mobile", values.contact);
  form.append("other_address", values.address);
  form.append("mapping_one_id", values.sector_block_building);
  form.append("mapping_two_id", values.floor_streets);
  form.append("mapping_three_id", values.plot_home_apartment);
  form.append("reidential_status", values.residential_status);
  values.cnic_image.forEach((item) => {
    form.append("cnic_image[]", item);
  });
  values.documents.forEach((item) => {
    form.append("documents[]", item);
  });
  form.append("property_image", values.property_image);

  function* api() {
    const { data } = yield call(assignOwnershipApi, form);
    yield put(setAssignOwnership(data.data));
    yield call(formikActions.resetForm);
    yield call(nullValue);
    yield call(setVal);
    yield put(
      setError({
        type: "success",
        message: data.message,
      })
    );
    // yield put(push("/property_ownership"));
  }

  yield call(() => localApiStateHandler(api));
}

export function* handleOwnershipList() {
  function* api() {
    const { data } = yield call(ownershipListApi);
    yield put(setOwnershipList(data));
  }
  yield call(() => localApiStateHandler(api));
}

export function* handleApproveProperty(action) {
  function* api() {
    const { data } = yield call(approvePropertyApi, action.payload);
    console.log(data, "data");
    yield put(setApproveProperty(data));

    yield put(
      setError({
        type: "success",
        message: data.message,
      })
    );
  }
  yield call(() => localApiStateHandler(api));
}

export function* handleViewOwnership(action) {
  function* api() {
    const { data } = yield call(viewOwnershipApi, action.payload);
    yield put(setViewOwnership(data));
  }
  yield call(() => localApiStateHandler(api));
}
