import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "./SearchBar";

it("checks the rendering of Search Bar", () => {
	render(<SearchBar />);

	const textElement = screen.getByPlaceholderText(/Search by title or author/i);
	expect(textElement).toBeInTheDocument();
});
