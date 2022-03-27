import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReadAgain from "./ReadAgain";

it("checks the for label prop", () => {
	render(<ReadAgain label="finished" />);

	const textElement = screen.getByText(/finished/i);
	expect(textElement).toBeInTheDocument();
});
