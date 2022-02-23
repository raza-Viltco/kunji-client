import { call, put, all } from "redux-saga/effects";
import { push } from "connected-react-router";

import { saveToPersistance } from "../../../utils/functions";
import { setUserData, userRegisterData } from "../../actions/user";
import { loginApi, registerApi } from "../apis/user";
import { localApiStateHandler } from "./localApiStateHandler";
import { setError } from "../../actions/local";

// export function* ohandleLogin(action) {
// 	try {
// 		yield put(setLoading(true));
// 		const { data } = yield call(loginApi, action.payload);
// 		saveToPersistance("kunji_auth_data", data);
// 		yield put(setUserData(data));
// 	} catch (error) {
// 		yield put(
// 			setError({ type: "error", message: error.response.data.message }),
// 		);
// 	} finally {
// 		yield put(setLoading(false));
// 	}
// }

export function* handleLogin(action) {
  function* api() {
    const { data } = yield call(loginApi, action.payload.values);
    saveToPersistance("kunji_auth_data", data);
    console.log(data);
    yield put(setUserData(data));
    yield put(
      setError({
        type: "success",
        message: data.message === "Success" && "Successfully Login",
      })
    );
    yield put(push("/"));
    yield put(action.payload.formikActions.resetForm());
  }

  yield call(() => localApiStateHandler(api));
}

export function* handleRegister(action) {
  function* api() {
    const { data } = yield call(registerApi, action.payload.values);
    console.log(data);
    saveToPersistance("Bearer_Otp_Token", data.data.token);
    yield put(userRegisterData(data));
    yield put(push("/otp_verification/:register"));
    yield put(action.payload.formikActions.resetForm());
  }

  yield call(() => localApiStateHandler(api));
}
