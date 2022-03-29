import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginPage from "./LoginPage";

it("checks rendering of the sign up button", () => {
	render(<LoginPage />);

	const textElement = screen.getByText(/sign up/i);
	expect(textElement).toBeInTheDocument();
});
it("checks rendering of the log in button", () => {
	render(<LoginPage />);

	const textElement = screen.getByText(/log in/i);
	expect(textElement).toBeInTheDocument();
});
it("checks rendering of the logo", () => {
	render(<LoginPage />);

	const imgElement = screen.getByAltText("logo");
	expect(imgElement).toBeInTheDocument();
});
