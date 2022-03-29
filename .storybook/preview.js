import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "emotion-theming";
import customTheme from "../src/Themes/customThemes.tsx";
import { Provider } from "react-redux";
import { store } from "../src/store/store";
import { addDecorator } from "@storybook/react";
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

const withProvider = (story) => <Provider store={store}>{story()}</Provider>;

addDecorator(withProvider);
