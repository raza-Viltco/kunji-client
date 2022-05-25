import { actionTypes } from "../../action-types";

export const panicAlert = () => ({
  type: actionTypes.PANIC_ALERT,
});

export const setPanicAlert = (payload) => ({
  type: actionTypes.SET_PANIC_ALERT,
  payload,
});
