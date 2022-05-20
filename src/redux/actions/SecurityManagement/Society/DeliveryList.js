import { actionTypes } from "../../action-types";

export const deliveryList = () => ({
  type: actionTypes.DELIVERY_LIST,
});

export const setDeliveryList = (payload) => ({
  type: actionTypes.SET_DELIVERY_LIST,
  payload,
});

export const notifyResident = (payload) => ({
  type: actionTypes.NOTIFY_RESIDENT,
  payload,
});

export const setNotifyResident = (payload) => ({
  type: actionTypes.SET_NOTIFY_RESIDENT,
  payload,
});
