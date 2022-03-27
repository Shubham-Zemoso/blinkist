import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookGrid from "./BookGrid";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import Buttons from "../../atoms/Buttons/Buttons";

it("checks the rendering of the component", () => {
	render(
		<Provider store={store}>
			<BookGrid children={<Buttons children="click" />} />
		</Provider>
	);

	const gridElement = screen.getByTestId("grid_container");
	expect(gridElement).toBeInTheDocument();
});
