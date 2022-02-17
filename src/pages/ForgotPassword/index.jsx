import React from "react";
import { Button} from "@mui/material";
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
      <div className="form_bottom__line"></div>
      <Link to="/login">
        <p className="text-center m-0 form_signup__link">
          Remember your password? Login
        </p>
      </Link>
    </AuthView>
  );
};

export default ForgotPassword;
