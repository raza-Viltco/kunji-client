import { actionTypes } from "../../actions/action-types";

const initialState = {
  roles: [],
};

const viewRolesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_VIEW_PROFILE:
      return { ...state, roles: payload };
    default:
      return state;
  }
};

export default viewRolesReducer;
