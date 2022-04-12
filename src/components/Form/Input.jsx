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
  className
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
        className={className}
        // className="bootstyle"
      />
    </Form.Group>

    // <TextField
    //   margin={margin}
    //   required={required}
    //   fullWidth
    //   id={id}
    //   label={label}
    //   name={name}
    //   type={type}
    //   autoComplete={autoComplete}
    //   sx={{ backgroundColor: "white", fontSize:"5px" }}
    //   error={error ? !!error : false}
    //   helperText={helperText}
    //   onChange={onChange}
    //   onBlur={onBlur}
    //   value={value}
    //   disabled={disabled}
    //   hidden={hidden}
    //   variant="filled"
    //   size="small"
    //   inputProps={{
    //     multiple: true,
    //     accept: "image/png, image/jpeg, .pdf, .xls, .xlsx, .csv",
    //   }}
    // />
  );
};

export default Input;
