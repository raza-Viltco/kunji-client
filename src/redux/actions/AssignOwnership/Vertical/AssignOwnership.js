import { actionTypes } from "../../action-types";

export const assignAppartmentData = (payload) => ({
  type: actionTypes.ASSIGN_APPARTMENT_DATA,
  payload,
});

export const setAssignAppartmentData = (payload) => ({
  type: actionTypes.SET_ASSIGN_APPARTMENT_DATA,
  payload,
});

export const propertyList = () => ({
  type: actionTypes.PROPERTY_LIST,
});

export const setPropertyList = (payload) => ({
  type: actionTypes.SET_PROPERTY_LIST,
  payload,
});

export const setAppartmentFloor = (payload) => ({
  type: actionTypes.SET_APPARTMENT_FLOOR,
  payload,
});

export const setAppartmentNumber = (payload) => ({
  type: actionTypes.SET_APPARTMENT_NUMBER,
  payload,
});

export const ownerData = (payload) => ({
  type: actionTypes.OWNER_DATA,
  payload,
});

export const setOwnerData = (payload) => ({
  type: actionTypes.SET_OWNER_DATA,
  payload,
});

export const assignOwnership = (payload) => ({
  type: actionTypes.ASSIGN_OWNERSHIP,
  payload,
});

export const setAssignOwnership = (payload) => ({
  type: actionTypes.SET_ASSIGN_OWNERHIP,
  payload,
});

export const ownershipList = () => ({
  type: actionTypes.OWNERSHIP_LIST,
});

export const setOwnershipList = (payload) => ({
  type: actionTypes.SET_OWNERSHIP_LIST,
  payload,
});

export const approveProperty = (payload) => ({
  type: actionTypes.APPROVE_PROPERTY,
  payload,
});

export const setApproveProperty = (payload) => ({
  type: actionTypes.SET_APPROVE_PROPERTY,
  payload,
});

export const viewOwnership = (payload) => ({
  type: actionTypes.VIEW_OWNERSHIP,
  payload,
});

export const setViewOwnership = (payload) => ({
  type: actionTypes.SET_VIEW_OWNERSHIP,
  payload,
});
