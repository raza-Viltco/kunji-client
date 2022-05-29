import { actionTypes } from "../../actions/action-types";

const initialState = {
  societyData: null,
};

const societyDashboardReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_SOCIETY_DASHBOARD:
      return { ...state, societyData: payload };

    default:
      return state;
  }
};

export default societyDashboardReducer;
