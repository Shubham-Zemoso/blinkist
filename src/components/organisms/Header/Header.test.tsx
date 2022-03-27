import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom";

it("checks rendering of component", () => {
	render(<Header />);
});

it("checks for Explore", () => {
	render(<Header />);

	const textElement = screen.getByText(/explore/i);
	expect(textElement).toBeInTheDocument();
});

it("checks for My Library", () => {
	render(<Header />);

	const textElement = screen.getByText(/my library/i);
	expect(textElement).toBeInTheDocument();
});

it("checks for click event", () => {
	render(<Header />);

	const downArrowElement = screen.getByTestId("downArrow");

	fireEvent.click(downArrowElement);
	expect(downArrowElement).not.toBeInTheDocument();
});
