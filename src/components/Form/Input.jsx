import React from "react";
import { TextField } from "@mui/material";

const Input = ({
  margin,
  required,
  id,
  label,
  name,
  autoComplete,
  error,
  onChange,
  onBlur,
  value,
  type,
  helperText,
  disabled,
}) => {
  return (
    <TextField
      margin={margin}
      required={required}
      fullWidth
      id={id}
      label={label}
      name={name}
      type={type}
      autoComplete={autoComplete}
      sx={{ backgroundColor: "white" }}
      error={error ? !!error : false}
      helperText={error}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      disabled={disabled}
      variant="filled"
      size="small"
      inputProps={{
        multiple: true,
        accept: "image/png, image/jpeg, .pdf, .xls, .xlsx, .csv",
      }}
    />
  );
};

export default Input;
