import { call, put } from "redux-saga/effects";
import { setError, setLoading } from "../../actions/local";

export function* localApiStateHandler(apiHandler) {
	try {
		yield put(setLoading(true));
        yield call(apiHandler)
	} catch (error) {
		yield put(
			setError({ type: "error", message: error.response.data.message }),
		);
	} finally {
		yield put(setLoading(false));
	}
}
