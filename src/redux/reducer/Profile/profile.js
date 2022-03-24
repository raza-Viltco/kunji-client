import { actionTypes } from "../../actions/action-types";

const initialState = {
  profileData: null,
  profileUpdate: null,
  appbarImg: "",
};

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_VIEW_PROFILE:
      return { ...state, profileData: payload };
    case actionTypes.SET_UPDATE_PASSWORD:
      return { ...state, profileUpdate: payload };
    case actionTypes.SET_APPBAR_IMAGE:
      return { ...state, appbarImg: payload };
    default:
      return state;
  }
};

export default profileReducer;
