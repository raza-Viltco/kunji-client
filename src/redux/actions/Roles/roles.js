import { actionTypes } from "../action-types";

export const viewRoles = () => ({
  type: actionTypes.VIEW_ROLES,
});

export const setViewRoles = (payload) => ({
  type: actionTypes.SET_VIEW_PROFILE,
  payload,
});
