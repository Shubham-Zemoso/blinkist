import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import customTheme from "./Themes/customThemes";
import { ThemeProvider } from "@mui/material/styles";

test("renders learn react link", () => {
	render(
		<ThemeProvider theme={customTheme}>
			<App />
		</ThemeProvider>
	);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
