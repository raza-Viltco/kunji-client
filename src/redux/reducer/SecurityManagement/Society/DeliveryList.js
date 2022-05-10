import { actionTypes } from "../../../actions/action-types";

const initialState = {
  deliveryData: [],
};

const deliveryListReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_DELIVERY_LIST:
      return { ...state, deliveryData: payload };
    default:
      return state;
  }
};
export default deliveryListReducer;
