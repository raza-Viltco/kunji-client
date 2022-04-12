import { actionTypes } from "../../actions/action-types";

const initialState = {
  kunjiRole: "",
  kunjiRoleListing: [],
};

const kunjiRoleReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_KUNJI_ROLE:
      return { ...state, kunjiRole: payload };
    case actionTypes.SET_KUNJI_ROLE_LISTING:
      return { ...state, kunjiRoleListing: payload };
    default:
      return state;
  }
};

export default kunjiRoleReducer;
