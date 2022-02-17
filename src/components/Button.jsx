import React from "react";
import { Button, CircularProgress } from "@mui/material";

const LoadingButton = ({
	children,
	isLoading,
	type,
	fullWidth,
	variant,
	color,
	sx,
}) => {
	return (
		<Button
			type={type}
			fullWidth={fullWidth ? true : false}
			variant={variant}
			color={color}
			sx={sx}
		>
			{isLoading ? <CircularProgress color="secondary" /> : children}
		</Button>
	);
};

export default LoadingButton;
