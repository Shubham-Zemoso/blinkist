import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import BookGrid from "./BookGrid";
import Buttons from "../../atoms/Buttons/Buttons";
import { AddIcon } from "../../../Icons";
import ReadAgain from "../../molecules/ReadAgain/ReadAgain";
export default {
	title: "organisms/BookGrid",
	component: BookGrid,
} as ComponentMeta<typeof BookGrid>;

const Template: ComponentStory<typeof BookGrid> = (args) => (
	<BookGrid {...args} />
);
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
export const addBookGrid = Template.bind({});
addBookGrid.args = {
	children: <Buttons variant="contained" {...allProps} color="secondary" />,
};

export const readingBookGrid = Template.bind({});
readingBookGrid.args = {
	children: <ReadAgain label="Read Again" />,
	label: "currentlyReading",
};

export const finishedBookGrid = Template.bind({});
finishedBookGrid.args = {
	children: <ReadAgain label="Finished" />,
	label: "finished",
};
