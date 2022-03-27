import React from "react";
import { screen, render } from "@testing-library/react";
import TabsBar from "./TabsBar";

import { Provider } from "react-redux";
import { store } from "../../../store/store";

import "@testing-library/jest-dom";

it("checks rendering of the component", () => {
	render(
		<Provider store={store}>
			<TabsBar />
		</Provider>
	);
});

it("checks currently reading in the component", () => {
	render(
		<Provider store={store}>
			<TabsBar />
		</Provider>
	);
	const element = screen.getByText("Currently reading");
	expect(element).toBeInTheDocument();
});

it("checks Finished in the component", () => {
	render(
		<Provider store={store}>
			<TabsBar />
		</Provider>
	);
	const element = screen.getByText("Finished");
	expect(element).toBeInTheDocument();
});
