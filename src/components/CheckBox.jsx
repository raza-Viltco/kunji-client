import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CheckBox = () => {
  return (
    <>
      <Checkbox {...label} defaultChecked />
    </>
  );
};
export default CheckBox;
