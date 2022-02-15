import React from "react";
import { Button } from "@mui/material";

import AuthView from "../../components/AuthView/AuthView";
import Input from "../../components/Form/Input";

const OtpVerification = () => {
  return (
    <AuthView heading="OTP Verification" subject="Enter the otp">
      <Input
        margin="normal"
        required
        fullWidth
        name="Otp Code"
        label="Otp Code"
        type="text"
        id="Otp"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Send
      </Button>
    </AuthView>
  );
};

export default OtpVerification;
