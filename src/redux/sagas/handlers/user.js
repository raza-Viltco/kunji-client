import { call, put } from "redux-saga/effects";
import { setUserData } from "../../actions/user";
import { loginApi } from "../apis/user";

export function* handleLogin(action) {
	try {
		const data = yield call(loginApi, action.payload);
		yield put(setUserData(data));
	} catch (error) {}
}
