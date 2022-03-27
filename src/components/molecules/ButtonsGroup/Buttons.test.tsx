import React from "react";
import { render } from "@testing-library/react";
import ButtonsGroup from "./ButtonsGroup";
import "@testing-library/jest-dom";

it("checks the rendering of component", () => {
	render(<ButtonsGroup />);
});
