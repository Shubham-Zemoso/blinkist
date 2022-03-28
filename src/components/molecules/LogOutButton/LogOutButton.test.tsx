import * as React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import "@testing-library/jest-dom";
import LogOutButton from "./LogOutButton";

test("checks whether component renders", () => {
	render(<LogOutButton />);

	const element = screen.getByText("S");
	expect(element).toBeInTheDocument();
});
