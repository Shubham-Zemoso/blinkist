import React from "react";
import { screen, render } from "@testing-library/react";
import Buttons from "./Buttons";
import "@testing-library/jest-dom";

it("checks rendering of text prop", () => {
	render(<Buttons children="Click Me" />);

	const textElement = screen.getByText(/click me/i);
	expect(textElement).toBeInTheDocument();
});
