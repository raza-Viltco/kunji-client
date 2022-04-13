import React from "react";
import { Badge } from "react-bootstrap";

const InputError = ({ children }) => {
  return (
    <Badge bg="danger">
      <div>{children}</div>
    </Badge>
  );
};
export default InputError;
