import React from "react";
import { Button} from "@mui/material";
import { Link } from "react-router-dom";

import Input from "../../components/Form/Input";
import AuthView from "../../components/AuthView/AuthView";

const Register = () => {
  return (
    <AuthView heading="Sign Up" subject="Enter your email & mobile no.">
      <Input
        margin="normal"
        //   required
        fullWidth
        id="fullname"
        label="Full Name"
        name="fullname"
        type="email"
      />
      <Input
        margin="normal"
        //   required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        type="text"
      />
      <Input
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
      />
       <Input
        margin="normal"
        required
        fullWidth
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        id="confirmPassword"
      />
      <Input
        margin="normal"
        required
        fullWidth
        name="contact"
        label="Contact"
        type="text"
        id="contact"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign Up
      </Button>
      <div className="form_bottom__line"></div>
      <Link to="/login">
        <p className="text-center m-0 form_signup__link">
          Already have an account? Sign in
        </p>
      </Link>
    </AuthView>
  );
};

export default Register;
