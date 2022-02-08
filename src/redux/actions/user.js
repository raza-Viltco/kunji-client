import { actionTypes } from "./action-types";

export const login = (payload) => ({
	type: actionTypes.LOGIN, // 'LOGIN'
	payload, // data OBJ
});

export const setUserData = (payload) => ({
	type: actionTypes.SET_USER_DATA,
	payload,
});