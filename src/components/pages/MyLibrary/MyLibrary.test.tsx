import React from "react";
import { render } from "@testing-library/react";
import MyLibrary from "./MyLibrary";

import { Provider } from "react-redux";
import { store } from "../../../store/store";

import "@testing-library/jest-dom";

it("checks rendering of the component", () => {
	render(
		<Provider store={store}>
			<MyLibrary />
		</Provider>
	);
});
