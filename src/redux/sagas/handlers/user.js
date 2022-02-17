import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import { saveToPersistance } from "../../../utils/functions";
import { setUserData, userRegisterData } from "../../actions/user";
import { loginApi, registerApi } from "../apis/user";
import { setError, setLoading } from "../../actions/local";

export function* handleLogin(action) {
	try {
		yield put(setLoading(true));
		const { data } = yield call(loginApi, action.payload);
		saveToPersistance("kunji_auth_data", data);
		yield put(setUserData(data));
		toast.success("Login Successfully");
	} catch (error) {
		yield put(
			setError({ type: "error", message: error.response.data.message }),
		);
	} finally {
		yield put(setLoading(false));
	}
}

export function* handleRegister(action) {
	try {
		const { data } = yield call(registerApi, action.payload);
		console.log(data);
		yield put(userRegisterData(data));
	} catch (error) {
		console.log(error.message);
	}
}
