import React from "react";
// import { TextField } from "@mui/material";
import { Button, Form } from "react-bootstrap";
import "./Input.css";

const Input = ({
  id,
  name,
  type,
  onChange,
  onBlur,
  value,
  disabled,
  placeholder,
  multiple,
}) => {
  return (
    <Form.Group className="col-sm-12">
      <Form.Control
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        onBlur={onBlur}
        value={value}
        disabled={disabled}
        className="bootstyle"
        multiple={multiple}
      />
    </Form.Group>
  );
};

export default Input;
