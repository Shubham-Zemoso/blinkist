import React from "react";
import { screen, render } from "@testing-library/react";
import TabsMenu from "./TabsMenu";
import "@testing-library/jest-dom";

it("checks whether component renders properly", () => {
	render(<TabsMenu />);
});

it("checks the text in the component", () => {
	render(<TabsMenu />);
	const element = screen.getByText("Synopsis");
	expect(element).toBeInTheDocument();
});
