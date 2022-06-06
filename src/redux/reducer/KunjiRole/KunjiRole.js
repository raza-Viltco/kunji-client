import { actionTypes } from "../../actions/action-types";

const initialState = {
  kunjiRole: null,
  kunjiRoleListing: [],
  kunjiPermissons: "",
  permissionId: null,
  editRole: []
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
    case actionTypes.SET_PERMISSION_ID:
      return { ...state, permissionId: payload };
    case actionTypes.SET_EDIT_ROLE:
      return { ...state, editRole: payload}  
    default:
      return state;
  }
};

export default kunjiRoleReducer;
