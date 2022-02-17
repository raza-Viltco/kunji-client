import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/actions/user";

import { getFromPersistance } from "../utils/functions";

export const usePersistance = () => {
	const dispatch = useDispatch();

	const checkForAuthData = () => {
		const data = getFromPersistance("kunji_auth_data");
		if (data) {
			dispatch(setUserData(data));
		}
	};

	useEffect(() => {
		checkForAuthData();
	}, []);
};
