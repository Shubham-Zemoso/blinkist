import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import BooksGroup from "./BooksGroup";

export default {
	title: "organisms/BooksGroup",
	component: BooksGroup,
} as ComponentMeta<typeof BooksGroup>;

const Template: ComponentStory<typeof BooksGroup> = (args) => (
	<BooksGroup {...args} />
);

export const bookDetails = Template.bind({});

bookDetails.args = {
	title: "Trending Blinks",
};
