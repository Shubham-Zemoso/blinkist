import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import DropDown from "./DropDown";

const handleClose = () => {
	console.log("Handle Close");
};

it("checks rendering of component", () => {
	render(<DropDown handleClose={handleClose} anchorEl={null} />);
});
