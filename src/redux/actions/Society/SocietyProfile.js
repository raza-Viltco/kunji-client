import { actionTypes } from "../../actions/action-types";

export const societyProfile = () => ({
  type: actionTypes.SOCIETY_PROFILE,
});

export const setSocietyProfile = (payload) => ({
  type: actionTypes.SET_SOCIETY_PROFILE,
  payload,
});
