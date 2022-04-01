import * as React from "react";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";

const RadioButton = ({ label, row, children, flexAlign }) => {
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
        name="row-radio-buttons-group"
      >
        {children}
      </RadioGroup>
    </div>
  );
};
export default RadioButton;
