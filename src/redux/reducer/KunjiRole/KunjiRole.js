import { actionTypes } from "../../actions/action-types";

const initialState = {
  kunjiRole: null,
  kunjiRoleListing: [],
  kunjiPermissons: "",
  permissionId: [
    5, 6, 9, 10, 7, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
    34, 35, 42, 43, 44, 45, 46, 47, 48, 52, 13, 15, 16, 17,
  ],
};

const kunjiRoleReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_KUNJI_ROLE:
      return { ...state, kunjiRole: payload };
    case actionTypes.SET_KUNJI_ROLE_LISTING:
      return { ...state, kunjiRoleListing: payload };
    case actionTypes.SET_ASSIGN_PERMISSION:
      return { ...state, kunjiPermissons: payload };
    default:
      return state;
  }
};

export default kunjiRoleReducer;
