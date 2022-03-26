import React from "react";
import { screen, render } from "@testing-library/react";
import Footer from "./Footer";
import "@testing-library/jest-dom";

it("checks rendering of component", () => {
	render(<Footer />);
});

it("checks for the text content", () => {
	render(<Footer />);

	const textElement = screen.getByText(/big ideas/i);
	expect(textElement).toBeInTheDocument();
});

it("checks for the logo", () => {
	render(<Footer />);

	const logoElement = screen.getByAltText("logo");
	expect(logoElement).toBeInTheDocument();
});
