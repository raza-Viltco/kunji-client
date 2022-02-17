import { actionTypes } from "../actions/action-types";

const initialState = {
	isLoading: false,
	error: {
		message: "",
		type: ""
	},
};

const localReducer = (state = initialState, action) => {
	const { type, payload } = action;
	// console.log(action)
	switch (type) {
		case actionTypes.SET_LOADING:
			return { ...state, isLoading: payload };
		case actionTypes.SET_ERROR:
			return { ...state, error: payload };
		default:
			return state;
	}
};

export default localReducer;
