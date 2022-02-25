import { call, put } from "redux-saga/effects";
import { push } from "connected-react-router";

import {
  saveToPersistance,
  deleteFromPersistance,
} from "../../../../utils/functions";
import { setUserData, userRegisterData } from "../../../actions/Auth/user";
import { loginApi, registerApi } from "../../apis/Auth/user";
import { localApiStateHandler } from "../localApiStateHandler";
import { setError } from "../../../actions/local";

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
    const { data } = yield call(loginApi, action.payload);
    saveToPersistance("kunji_auth_data", data);
    console.log(data);
    yield put(setUserData(data));
    yield put(
      setError({
        type: "success",
        message: data.message === "Success" ? "Successfully Login" : "",
      })
    );
    yield put(push("/"));
  }

  yield call(() => localApiStateHandler(api));
}

export function* handleRegister(action) {
  function* api() {
    const { data } = yield call(registerApi, action.payload);
    console.log(data);
    saveToPersistance("Bearer_Otp_Token", data.data.token);
    yield put(userRegisterData(data));
    yield put(
      setError({
        type: "success",
        message: data.message,
      })
    );
    yield put(push("/otp_verification/:register"));
  }

  yield call(() => localApiStateHandler(api));
}

export function* handlerLogout() {
  function* api() {
    deleteFromPersistance("kunji_auth_data");
    yield put(push("/login"))
  }

  yield call(() => localApiStateHandler(api));
}
