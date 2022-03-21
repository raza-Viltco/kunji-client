import { actionTypes } from "../../actions/action-types";

const initialState = {
  profileData: null,
};

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_VIEW_PROFILE:
      return { ...state, profileData: payload };
    default:
      return state;
  }
};

export default profileReducer;
