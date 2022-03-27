import React from "react";
import { render } from "@testing-library/react";
import BookDetailsPage from "./BookDetailsPage";

import { Provider } from "react-redux";
import { store } from "../../../store/store";

it("checks rendering of the component", () => {
	render(
		<Provider store={store}>
			<BookDetailsPage />
		</Provider>
	);
});
