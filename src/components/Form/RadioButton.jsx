import * as React from "react";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";

const RadioButton = ({
  label,
  row,
  children,
  name,
  value,
  onChange,
  onBlur,
  flexAlign,
}) => {
  return (
    <div
      className={`${
        flexAlign ? "d-flex align-items-center justify-content-between" : ""
      }`}
    >
      <FormLabel id="demo-row-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroup
        row={row}
        aria-labelledby="demo-row-radio-buttons-group-label"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        {children}
      </RadioGroup>
    </div>
  );
};
export default RadioButton;
