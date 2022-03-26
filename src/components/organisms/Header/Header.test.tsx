import React from "react";
import { screen, render } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom";

it("checks rendering of component", () => {
	render(<Header />);
});

it("checks for explore text", () => {
	render(<Header />);

	const textElement = screen.getByText(/explore/i);
	expect(textElement).toBeInTheDocument();
});
