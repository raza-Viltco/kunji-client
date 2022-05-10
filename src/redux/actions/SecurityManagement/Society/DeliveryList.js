import { actionTypes } from "../../action-types";

export const deliveryList = () => ({
  type: actionTypes.DELIVERY_LIST,
});

export const setDeliveryList = (payload) => ({
  type: actionTypes.SET_DELIVERY_LIST,
  payload,
});
