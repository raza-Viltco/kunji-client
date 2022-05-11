import React from "react";
import { Button, CircularProgress } from "@mui/material";

import "./Button.css";

const LoadingButton = ({
  children,
  isLoading,
  type,
  fullWidth,
  variant,
  color,
  sx,
  size,
  click,
  className,
  disabled
}) => {
  return (
    <Button
      type={type}
      fullWidth={fullWidth ? true : false}
      variant={variant}
      color={color}
      sx={sx}
      size={size}
      onClick={click}
      className={className}
      disabled={disabled}
    >
      {isLoading ? <CircularProgress color="secondary" size={25} /> : children}
    </Button>
  );
};

export default LoadingButton;
