import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import { saveToPersistance } from "../../../utils/functions";
import { setUserData } from "../../actions/user";
import { loginApi } from "../apis/user";

export function* handleLogin(action) {
  console.log(action);
  try {
    const { data } = yield call(loginApi, action.payload);
    console.log(data);
    saveToPersistance("kunji_auth_data", data);
    yield put(setUserData(data));
    toast.success("Login Successfully");
  } catch (error) {
    console.log(error.message);
    if (
      error.message === "Request failed with status code 422" ||
      error.message === "Request failed with status code 403"
    ) {
      toast.error("Invalid Credentials");
    }
  }
}
