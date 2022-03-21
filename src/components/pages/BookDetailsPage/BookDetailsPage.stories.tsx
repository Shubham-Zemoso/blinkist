import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import BookDetailsPage from "./BookDetailsPage";

export default {
	title: "pages/BookDetailsPage",
	component: BookDetailsPage,
} as ComponentMeta<typeof BookDetailsPage>;

const Template: ComponentStory<typeof BookDetailsPage> = () => (
	<BookDetailsPage />
);

export const bookDetailsPage = Template.bind({});
