import React from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Dropdown = ({
  value,
  onChange,
  onBlur,
  className,
  onClick,
  children,
  id,
  name,
  disabled,
}) => {
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
      disabled={disabled}
    >
      {children}
    </Form.Select>
  );
};

export default Dropdown;
