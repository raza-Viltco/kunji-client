import React from "react";
import { Form } from "react-bootstrap";

const TextArea = ({ id, name, rows, placeholder, onBlur, onChange, value }) => {
  return (
    <Form.Group className="col-sm-12">
      <Form.Control
        as="textarea"
        rows={rows}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        onBlur={onBlur}
        value={value}
      />
    </Form.Group>
  );
};
export default TextArea;
