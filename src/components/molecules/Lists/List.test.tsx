import React from "react";
import { render, screen } from "@testing-library/react";
import Lists from "./Lists";
import "@testing-library/jest-dom";

it("checks rendering of component", () => {
	render(<Lists />);
});

it("checks for the text", () => {
	render(<Lists />);

	const textElement = screen.getByText(/editorial/i);
	expect(textElement).toBeInTheDocument();
});
