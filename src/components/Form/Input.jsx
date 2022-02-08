import React from "react";
import { TextField } from "@mui/material";

const Input = ({ margin, required, id, label, name, autoComplete, error }) => {
	return (
		<TextField
			margin={margin}
			required={required}
			fullWidth
			id={id}
			label={label}
			name={name}
			autoComplete={autoComplete}
			autoFocus
			error={error ? error : false}
			helperText={error}
		/>
	);
};

export default Input;
