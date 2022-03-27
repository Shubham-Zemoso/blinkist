import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import BookCard from "./BookCard";
import Buttons from "../../atoms/Buttons/Buttons";
import { AddIcon } from "../../../Icons";
import ReadAgain from "../ReadAgain/ReadAgain";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import { store } from "../../../store/store";
const data = {
	id: "1",
	image: "/Images/1.png",
	title: "Bring Your Human to Work",
	author: "Erica Keswin",
	minutes: "13-minute read",
	reads: "16k reads",
	status: "reading",
	type: "Trending",
};
const allProps = {
	width: "100%",
	height: "52px",
	children: "Add to library",
	startIcon: (
		<AddIcon
			sx={{ height: "24px", display: "flex", position: "relative", top: "5px" }}
		/>
	),
};

it("checks rendering of the component", () => {
	render(
		<Provider store={store}>
			<BookCard
				bookData={data}
				children={
					<Buttons variant="contained" {...allProps} color="secondary" />
				}
			/>
		</Provider>
	);
	const btnElement = screen.getByText(/Add to library/i);
	expect(btnElement).toBeInTheDocument();
});

it("checks the on click test on add to library", () => {
	render(
		<Provider store={store}>
			<BookCard
				bookData={data}
				children={
					<Buttons variant="contained" {...allProps} color="secondary" />
				}
			/>
		</Provider>
	);
	const btnElement = screen.getByRole("button");
	fireEvent.click(btnElement);
});

it("checks read again bookcard test", () => {
	render(
		<Provider store={store}>
			<BookCard bookData={data} children={<ReadAgain label="finished" />} />
		</Provider>
	);
	const btnElement = screen.getByText(/finished/i);
	expect(btnElement).toBeInTheDocument();
});

it("checks reads text", () => {
	render(
		<Provider store={store}>
			<BookCard bookData={data} children={<ReadAgain label="finished" />} />
		</Provider>
	);

	const textElement = screen.getByText("16k reads");
	expect(textElement).toBeInTheDocument();
});
