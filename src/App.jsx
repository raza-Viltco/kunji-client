import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple, grey } from "@mui/material/colors";

import { usePersistance } from "./hooks/usePersistance";
import AppRouter from "./routes";
import "./App.css";

const App = () => {
  usePersistance();

  const theme = createTheme({
    palette: {
      primary: deepPurple,
      secondary: grey,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
