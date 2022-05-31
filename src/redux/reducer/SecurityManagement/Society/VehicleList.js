import { actionTypes } from "../../../actions/action-types";

const initialState = {
  vehicleData: "",
};

const vehicleListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_VEHICLE_LIST:
      return { ...state, vehicleData: payload };
    default:
      return state;
  }
};
export default vehicleListReducer;
