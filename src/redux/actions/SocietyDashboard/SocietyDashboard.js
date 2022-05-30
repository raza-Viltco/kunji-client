import { actionTypes } from "../action-types";

export const societyDashboard = () => ({
  type: actionTypes.SOCIETY_DASHBOARD,
});

export const setSocietyDashboard = (payload) => ({
  type: actionTypes.SET_SOCIETY_DASHBOARD,
  payload,
});
