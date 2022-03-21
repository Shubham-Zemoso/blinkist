import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import BookPage from "./BookPage";

export default {
	title: "organisms/BookPage",
	component: BookPage,
} as ComponentMeta<typeof BookPage>;

const Template: ComponentStory<typeof BookPage> = () => <BookPage />;

export const Bookpage = Template.bind({});
