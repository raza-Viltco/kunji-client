import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Input.css";

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
  errorText,
}) => {
  return (
    <FormControl
      variant="filled"
      size="small"
        label="Small select"
      sx={{  width: "100%" }}
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
        sx={{height:"50px", fontSize:"10px", paddingTop:"1%", backgroundColor:"grey"}}
      >
        {children}
      </Select>
      {error && <FormHelperText>{errorText}</FormHelperText>}
    </FormControl>
  );
};

export default Dropdown;

// css of drop down in Sidebar.css
