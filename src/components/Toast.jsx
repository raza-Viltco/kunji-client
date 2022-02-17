import React, { useEffect } from "react";
import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "../redux/actions/local";

const Toast = () => {
	const error = useSelector((state) => state.local.error);
	const dispatch = useDispatch();

	const clearError = () => {
		dispatch(setError(""));
	};

	if (!error) {
		return <></>;
	}

	return (
		error?.type &&
		error?.message && (
			<Snackbar
				open={!!error}
                onClose={clearError}
				autoHideDuration={3000}
				key="TransitionLeft"
			>
				<Alert
					onClose={clearError}
					severity={error?.type}
					variant="filled"
				>
					{error?.message}
				</Alert>
			</Snackbar>
		)
	);
};

export default Toast;
