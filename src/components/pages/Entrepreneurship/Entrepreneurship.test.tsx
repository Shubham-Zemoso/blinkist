import React from "react";
import { render } from "@testing-library/react";
import Entrepreneurship from "./Entrepreneurship";

import { Provider } from "react-redux";
import { store } from "../../../store/store";

it("checks rendering of the component", () => {
	render(
		<Provider store={store}>
			<Entrepreneurship />
		</Provider>
	);
});
