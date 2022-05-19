import { actionTypes } from "../../../actions/action-types";

const initialState = {
  data: [],
  propertyList: [],
  setAppartmentFloor: "",
  setAppartmentNumber: "",
  setOwnerData: "",
  assignOwnership: [],
  ownershipData: "",
  approveProperty: "",
};

const assignOwnershipReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_ASSIGN_APPARTMENT_DATA:
      return { ...state, data: payload };
    case actionTypes.SET_PROPERTY_LIST:
      return { ...state, propertyList: payload };
    case actionTypes.SET_APPARTMENT_FLOOR:
      return { ...state, setAppartmentFloor: payload };
    case actionTypes.SET_APPARTMENT_NUMBER:
      return { ...state, setAppartmentNumber: payload };
    case actionTypes.SET_OWNER_DATA:
      return { ...state, setOwnerData: payload };
    case actionTypes.ASSIGN_OWNERSHIP:
      return { ...state, assignOwnership: payload };
    case actionTypes.SET_OWNERSHIP_LIST:
      return { ...state, ownershipData: payload };
    case actionTypes.SET_APPROVE_PROPERTY:
      return { ...state, approveProperty: payload };
    default:
      return state;
  }
};
export default assignOwnershipReducer;
