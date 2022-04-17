import { actionTypes } from "../../action-types";

export const addDepartment = (payload) => ({
  type: actionTypes.ADD_DEPARTMENT,
  payload,
});

export const setAddDepartment = (payload) => ({
  type: actionTypes.SET_ADD_DEPARTMENT,
  payload,
});

export const departmentListing = () => ({
  type: actionTypes.DEPARTMENT_LISTING,
});

export const setDepartmentListing = (payload) => ({
  type: actionTypes.SET_DEPARTMENT_LISTING,
  payload,
});

export const departmentStatus = (payload) => ({
  type: actionTypes.DEPARTMENT_STATUS,
  payload,
});

export const setDepartmentStatus = (payload) => ({
  type: actionTypes.SET_DEPARTMENT_STATUS,
  payload,
});
