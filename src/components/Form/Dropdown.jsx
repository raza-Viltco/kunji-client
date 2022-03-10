import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Dropdown = ({
  error,
  inputLabel,
  label,
  value,
  onChange,
  onBlur,
  onClick,
  children,
  id,
  name,
}) => {
  return (
    <FormControl
      variant="filled"
      sx={{ m: 1, width: "100%" }}
      error={error ? !!error : false}
    >
      <InputLabel id="demo-simple-select-error-label">{inputLabel}</InputLabel>
      <Select
        labelId="demo-simple-select-error-label"
        id={id}
        value={value}
        label={label}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        onClick={onClick}
      >
        {children}
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default Dropdown;
