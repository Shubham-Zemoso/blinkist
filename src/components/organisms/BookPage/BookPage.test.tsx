import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookPage from "./BookPage";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useParams: () => ({
		id: "1",
	}),
}));

it("checks rendering of the component", () => {
	render(
		<Provider store={store}>
			<BookPage />
		</Provider>
	);

	const pageElement = screen.getByTestId("book_page");
	expect(pageElement).toBeInTheDocument();
});

it("checks rendering of the book image", () => {
	render(
		<Provider store={store}>
			<BookPage />
		</Provider>
	);

	const imageElement = screen.getByAltText("book");
	expect(imageElement).toBeInTheDocument();
});
