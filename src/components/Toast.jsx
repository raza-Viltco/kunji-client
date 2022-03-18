import React, { useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { setError } from "../redux/actions/local";

const Toast = () => {
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal} = state;
  const error = useSelector((state) => state.local.error);
  const dispatch = useDispatch();

  const handleClick = (newState) => () => {
    if (!!error) {
      setState({ open: true, ...newState });
    }
  };

  const clearError = () => {
    dispatch(setError(""));
  };

  if (!error) {
    return <></>;
  }

  return (
    error?.type &&
    error?.message && (
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={handleClick({
          vertical: "top",
          horizontal: "center",
        })}
        onClose={clearError}
        autoHideDuration={8000}
        key={vertical + horizontal}
      >
        <Alert onClose={clearError} severity={error?.type} variant="filled">
          {error?.message}
        </Alert>
      </Snackbar>
    )
  );
};

export default Toast;
