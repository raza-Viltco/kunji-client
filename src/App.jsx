import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { blue, grey } from "@mui/material/colors";

import AppRouter from "./routes";
import store from "./redux/store";
import "./App.css";

function App() {
	const theme = createTheme({
		palette: {
			primary: blue,
			secondary: grey,
		},
	});

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<AppRouter />
			</ThemeProvider>
		</Provider>
	);
}

export default App;
