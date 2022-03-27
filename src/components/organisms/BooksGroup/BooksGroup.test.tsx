import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BooksGroup from "./BooksGroup";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

it("checks renderng of the component", () => {
	render(
		<Provider store={store}>
			<BooksGroup title="Trending Blinks" />
		</Provider>
	);
});

it("checks the title text", () => {
	render(
		<Provider store={store}>
			<BooksGroup title="Trending Blinks" />
		</Provider>
	);

	const textElement = screen.getByText(/trending blinks/i);
	expect(textElement).toBeInTheDocument();
});
