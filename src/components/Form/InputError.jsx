import React from "react";

import "./InputError.css";

const InputError = ({ children }) => {
  return (
    <div className="input-error-background">
      <div>{children}</div>
    </div>
  );
};
export default InputError;
