import { call, put, delay } from "redux-saga/effects";
import { setError, setLoading } from "../../actions/local";

export function* localApiStateHandler(apiHandler) {
  try {
    yield put(setLoading(true));
    yield call(apiHandler);
  } catch (error) {
    let errors = error?.response?.data?.errors;
    if (errors) {
      for (let key of Object.keys(errors)) {
        console.log(key, errors[key]);
        yield put(setError({ type: "error", message: [errors[key]] }));
        yield delay(2000);
      }
    } else {
      yield put(
        setError({ type: "error", message: error?.response?.data?.message })
      );
    }
  } finally {
    yield put(setLoading(false));
  }
}
