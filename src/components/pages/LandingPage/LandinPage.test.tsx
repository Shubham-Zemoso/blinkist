import React from "react";
import { render } from "@testing-library/react";
import LandingPage from "./LandingPage";

import { Provider } from "react-redux";
import { store } from "../../../store/store";

it("checks rendering of the component", () => {
	render(
		<Provider store={store}>
			<LandingPage />
		</Provider>
	);
});
