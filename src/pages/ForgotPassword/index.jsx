import React from "react";
import { Button,Grid } from "@mui/material";
import { Link } from "react-router-dom";

import Input from "../../components/Form/Input";
import AuthView from "../../components/AuthView/AuthView";

const ForgotPassword = () => {
  return (
    <AuthView heading="Forgot Password" subject="Enter your email">
      <Input
        margin="normal"
        //   required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        type="text"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Send
      </Button>
      {/* <Grid container>
        <Grid item xs>
          <Link to="/login">Remember your password? Login</Link>
        </Grid>
      </Grid> */}
    </AuthView>
  );
};

export default ForgotPassword;
