import { actionTypes } from "../../actions/action-types";

const initialState = {
  residentData: [],
  billList: "",
  residentDrop: null,
};

const generateBillReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_SELECT_RESIDENT:
      return { ...state, residentData: payload };
    case actionTypes.SET_BILL_LIST:
      return { ...state, billList: payload };
    case actionTypes.SET_GENERATE_BILL:
      return { ...state, billList: [payload, ...state.billList] };
    case actionTypes.SET_RESIDENT_DROP:
      return { ...state, residentDrop: payload };
    default:
      return state;
  }
};
export default generateBillReducer;
