import { actionTypes } from "../action-types";

export const contactsList = () => ({
  type: actionTypes.SOCIETY_CONTACTS,
});

export const setContactsList = (payload) => ({
  type: actionTypes.SET_SOCIETY_CONTACTS,
  payload,
});

export const createContacts = (payload) => ({
  type: actionTypes.CREATE_CONTACTS,
  payload,
});

export const setCreateContacts = (payload) => ({
  type: actionTypes.SET_CREATE_CONTACTS,
  payload,
});
