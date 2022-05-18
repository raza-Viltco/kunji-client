import { actionTypes } from "../action-types";

export const userDepartment = (payload) => ({
  type: actionTypes.USER_DEPARTMENT,
  payload,
});

export const setUserDepartment = (payload) => ({
  type: actionTypes.SET_USER_DEPARTMENT,
  payload,
});

export const userCreation = (payload) => ({
  type: actionTypes.USER_CREATION,
  payload,
});

export const setUserCreation = (paylaod) => ({
  type: actionTypes.SET_USER_CREATION,
  paylaod,
});

export const staffList = () => ({
  type: actionTypes.STAFF_LIST,
});

export const setStaffList = (payload) => ({
  type: actionTypes.SET_STAFF_LIST,
  payload,
});
