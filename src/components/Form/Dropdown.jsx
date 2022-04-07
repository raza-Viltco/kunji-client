import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Dropdown = ({ value, onChange, onBlur, onClick, children, id, name }) => {
  return (
    <Form.Select
      aria-label="Default select example"
      className="bootstyle "
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      id={id}
      onClick={onClick}
    >
      {children}
    </Form.Select>

    // <FormControl
    //   variant="filled"
    //   size="small"
    //   label="Small select"
    //   sx={{ width: "100%" }}
    //   error={error ? !!error : false}
    // >
    //   <InputLabel id="demo-simple-select-error-label">{inputLabel}</InputLabel>
    //   <Select
    //     labelId="demo-simple-select-error-label"
    //     id={id}
    //     value={value}
    //     label={label}
    //     onChange={onChange}
    //     onBlur={onBlur}
    //     name={name}
    //     onClick={onClick}
    //     sx={{
    //       height: "50px",
    //       fontSize: "10px",
    //       paddingTop: "1%",
    //       backgroundColor: "grey",
    //     }}
    //   >
    //     {children}
    //   </Select>
    //   {error && <FormHelperText>{errorText}</FormHelperText>}
  );
};

export default Dropdown;

// css of drop down in Sidebar.css
