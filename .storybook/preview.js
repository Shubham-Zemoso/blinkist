import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "emotion-theming";
import customTheme from "../src/Themes/customThemes.tsx";
export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [
	(Story) => (
		<MUIThemeProvider theme={customTheme}>
			<ThemeProvider theme={customTheme}>
				<Story />
			</ThemeProvider>
		</MUIThemeProvider>
	),
];
