import React from "react";
import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Slide from "@mui/material/Slide";

import { setError } from "../redux/actions/local";

const Toast = () => {
  const error = useSelector((state) => state.local.error);
  const dispatch = useDispatch();

  const transitionRight = (props) => {
    return <Slide {...props} direction="left" />;
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
        open={!!error}
        onClose={clearError}
        autoHideDuration={8000}
        TransitionComponent={transitionRight}
        key="TransitionLeft"
      >
        <Alert onClose={clearError} severity={error?.type} variant="filled">
          {error?.message}
        </Alert>
      </Snackbar>
    )
  );
};

export default Toast;
