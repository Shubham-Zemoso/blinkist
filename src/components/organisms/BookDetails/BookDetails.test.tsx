import React from "react";
import { render, screen } from "@testing-library/react";
import BookDetails from "./BookDetails";
import "@testing-library/jest-dom";

const data = {
	id: "1",
	title: "Bring Your Human to Work",
	author: "Erica Keswin",
	minutes: "13-minute read",
};

it("checks rendering of the component", () => {
	render(<BookDetails bookData={data} />);
});

it("checks the title text", () => {
	render(<BookDetails bookData={data} />);

	const textElement = screen.getByText(/bring your human to work/i);
	expect(textElement).toBeInTheDocument();
});
