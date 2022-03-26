import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import BookCard from "./BookCard";
import ReadAgain from "../ReadAgain/ReadAgain";
import Buttons from "../../atoms/Buttons/Buttons";
import { AddIcon } from "../../../Icons";

export default {
	title: "molecules/BookCard",
	component: BookCard,
	decorators: [
		(Story) => (
			<div style={{ width: "284px" }}>
				<Story />
			</div>
		),
	],
} as ComponentMeta<typeof BookCard>;

const Template: ComponentStory<typeof BookCard> = (args) => (
	<BookCard {...args} />
);

export const Primary = Template.bind({});

const data = {
	id: "1",
	image: "/Images/1.png",
	title: "Bring Your Human to Work",
	author: "Erica Keswin",
	minutes: "13-minute read",
	reads: "",
	status: "reading",
	type: "Trending",
	audio: true,
};

Primary.args = {
	bookData: data,
};

export const FinishedCard = Template.bind({});

FinishedCard.args = {
	children: <ReadAgain label="Finished" />,
	bookData: data,
};

export const ReadAgainCard = Template.bind({});

ReadAgainCard.args = {
	children: <ReadAgain label="Read Again" />,
	bookData: data,
};

export const AddToLibrary = Template.bind({});

const allProps = {
	width: "284px",
	height: "52px",
	children: "Add to library",
	startIcon: (
		<AddIcon
			sx={{ height: "24px", display: "flex", position: "relative", top: "5px" }}
		/>
	),
};

AddToLibrary.args = {
	bookData: data,
	children: <Buttons variant="contained" {...allProps} color="secondary" />,
};
