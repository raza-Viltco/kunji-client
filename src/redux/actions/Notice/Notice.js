import { actionTypes } from "../action-types";

export const createNotice = (payload) => ({
  type: actionTypes.CREATE_NOTICE,
  payload,
});

export const setCreateNotice = (payload) => ({
  type: actionTypes.SET_CREATE_NOTICE,
  payload,
});
