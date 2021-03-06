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

export const assignPermission = (payload) => ({
  type: actionTypes.ASSIGN_PERMISSION,
  payload,
});

export const setAssignPermission = (payload) => ({
  type: actionTypes.SET_ASSIGN_PERMISSION,
  payload,
});

export const setPermissionIds = (payload) => ({
  type: actionTypes.SET_PERMISSION_ID,
  payload,
});

export const editRole = (payload) => ({
  type: actionTypes.EDIT_ROLE,
  payload
})

export const setEditRole = (payload) => ({
  type: actionTypes.SET_EDIT_ROLE,
  payload
})