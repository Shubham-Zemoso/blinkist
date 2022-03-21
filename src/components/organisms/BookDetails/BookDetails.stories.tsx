import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import BookDetails from "./BookDetails";

export default {
	title: "organisms/BookDetails",
	component: BookDetails,
} as ComponentMeta<typeof BookDetails>;

const Template: ComponentStory<typeof BookDetails> = (args) => (
	<BookDetails {...args} />
);

export const bookDetails = Template.bind({});

bookDetails.args = {
	bookData: {
		id: "1",
		image: "/Images/2.png",
		title: "Bring Your Human to Work",
		author: "Erica Keswin",
		minutes: "13-minute read",
		reads: "",
		status: "reading",
		type: "Trending",
	},
};
