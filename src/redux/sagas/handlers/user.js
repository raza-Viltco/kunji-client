import { call, put, } from "redux-saga/effects";
import { saveToPersistance } from "../../../utils/functions";
import { setUserData } from "../../actions/user";
import { loginApi } from "../apis/user";

export function* handleLogin(action) {
	console.log(action);
  try {
    const { data } = yield call(loginApi, action.payload);
    saveToPersistance("kunji_auth_data", data);
    yield put(setUserData(data));
  } catch (error) {}
}
