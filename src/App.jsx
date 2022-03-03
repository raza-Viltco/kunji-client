import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple, grey } from "@mui/material/colors";

import { usePersistance } from "./hooks/usePersistance";
import AppRouter from "./routes";
import "./App.css";
import Toast from "./components/Toast";

const App = () => {
  usePersistance();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#00AEAE",
      },
      secondary: grey,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Toast />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
