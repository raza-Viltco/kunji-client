import * as React from "react";
import Radio from "@mui/material/Radio";

const RadioButtons = ({ selectedValues, onChange, value, name }) => {
  const [selectedValue, setSelectedValue] = React.useState({selectedValues});

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
 
      <Radio
        checked={selectedValue === { selectedValues }}
        onChange={onChange}
        value={value}
        name={name}
        inputProps={{ "aria-label": "A" }}
      />
   
  );
};
export default RadioButtons;
