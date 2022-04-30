import { actionTypes } from "../action-types";

export const pollList = () => ({
  type: actionTypes.POLL_LIST,
});

export const setPollList = (payload) => ({
  type: actionTypes.SET_POLL_LIST,
  payload,
});

export const createPoll = (payload) => ({
  type: actionTypes.CREATE_POLL,
  payload,
});

export const setCreatePoll = (payload) => ({
  type: actionTypes.SET_CREATE_POLL,
  payload,
});

export const viewPoll = (payload) => ({
  type: actionTypes.VIEW_POLL,
  payload,
});

export const setViewPoll = (payload) => ({
  type: actionTypes.SET_VIEW_POLL,
  payload,
});
