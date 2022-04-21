import { actionTypes } from "../../actions/action-types";

const initialState = {
  profileData: "",
};

const societyProfileReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_SOCIETY_PROFILE:
      return { ...state, profileData: payload };
    default:
      return state;
  }
};

export default societyProfileReducer;
