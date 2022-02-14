import React from "react";
import {
  Typography,
  Box,
  Grid,
  CssBaseline,
  Paper,
} from "@mui/material";

import AuthImage from "../../assets/auth-bg.png";
import { APP_LOGO } from "../../constants/AssetsConstants";


const AuthView = ({ children, heading }) => {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${AuthImage})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={APP_LOGO} alt="logo-img" />
          <Typography component="h1" variant="h5" >
            {heading}
          </Typography>
          <Box sx={{ mt: 1 }}>{children}</Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AuthView;
