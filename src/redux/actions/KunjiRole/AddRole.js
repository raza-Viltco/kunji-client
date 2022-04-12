import { actionTypes } from "../action-types";

export const addKunjiRole = (payload) => ({
  type: actionTypes.KUNJI_ROLE,
  payload,
});

export const setKunjiRole = (payload) => ({
  type: actionTypes.SET_KUNJI_ROLE,
  payload,
});

export const kunjiRoleListing = () => ({
  type: actionTypes.KUNJI_ROLE_LISTING,
});

export const setKunjiRoleListing = (payload) => ({
  type: actionTypes.SET_KUNJI_ROLE_LISTING,
  payload,
});
