import React from "react";
import { render, screen } from "@testing-library/react";
import Banner from "./Banner";
import "@testing-library/jest-dom";
it("checks rendering of component", () => {
	render(<Banner />);
});

it("checks for the text", () => {
	render(<Banner />);
	const element = screen.getByText(/explore books on/i);
	expect(element).toBeInTheDocument();
});

it("checks the alt text in the image", () => {
	render(<Banner />);
	const element = screen.getByAltText("banner");
	expect(element).toHaveAttribute("src");
});
