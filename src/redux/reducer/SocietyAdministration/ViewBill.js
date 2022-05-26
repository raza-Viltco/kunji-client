import { actionTypes } from "../../actions/action-types";

const initialState = {
  viewBillData: null,
};

const viewBillReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_VIEW_BILL:
      return { ...state, viewBillData: payload };

    default:
      return state;
  }
};
export default viewBillReducer;
