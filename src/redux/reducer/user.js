import { actionTypes } from "../actions/action-types";

const initialState = {
	data: null,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_USER_DATA:
			const { payload } = action;
			console.log(payload)
			return { ...state, data: payload };
		default:
			return state;
	}
};

export default userReducer;
