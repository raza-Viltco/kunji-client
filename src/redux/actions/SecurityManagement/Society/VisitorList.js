import { actionTypes } from "../../action-types";

export const visitorList = () => ({
  type: actionTypes.VISITOR_LIST,
});

export const setVisitorList = (payload) => ({
  type: actionTypes.SET_VISITOR_LIST,
  payload,
});
