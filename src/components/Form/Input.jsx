import React from "react";
import { TextField } from "@mui/material";

const Input = ({
  margin,
  required,
  id,
  label,
  name,
  autoComplete,
  error=null,
  onChange,
  onBlur,
  value,
  type,
  helperText,
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
      autoFocus
      error={error ? true : false}
      helperText={helperText}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    />
  );
};

export default Input;
