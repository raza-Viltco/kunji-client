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
  hidden,
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
      sx={{ backgroundColor: "white", fontSize:"5px" }}
      error={error ? !!error : false}
      helperText={helperText}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      disabled={disabled}
      hidden={hidden}
      variant="outlined"
      size="small"
      inputProps={{
        multiple: true,
        accept: "image/png, image/jpeg, .pdf, .xls, .xlsx, .csv",
      }}
    />
  );
};

export default Input;
