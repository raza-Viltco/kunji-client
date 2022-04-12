import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Dropdown = ({ value, onChange, onBlur,className, onClick, children, id, name }) => {
  return (
    <Form.Select
      aria-label="Default select example"
      className={className}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      id={id}
      onClick={onClick}
    >
      {children}
    </Form.Select>

     );
};

export default Dropdown;


