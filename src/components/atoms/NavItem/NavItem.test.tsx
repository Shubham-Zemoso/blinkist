import React from "react";
import { screen, render } from "@testing-library/react";
import { Icon1 } from "../../../Icons";
import NavItem from "./NavItem";
import "@testing-library/jest-dom";

it("checks rendering of text prop", () => {
	render(<NavItem children="Click Me" />);

	const textElement = screen.getByText(/click me/i);
	expect(textElement).toBeInTheDocument();
});

it("checks rendering of start icon", () => {
	render(<NavItem children="Click Me" startIcon={<Icon1 />} />);

	const startIconElement = screen.getByTestId("startIcon");
	expect(startIconElement).toBeInTheDocument();
});

it("checks rendering of end icon", () => {
	render(<NavItem children="Click Me" endIcon={<Icon1 />} />);

	const endIconElement = screen.getByTestId("endIcon");
	expect(endIconElement).toBeInTheDocument();
});
