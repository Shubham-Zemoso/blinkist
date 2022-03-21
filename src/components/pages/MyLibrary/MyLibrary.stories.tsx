import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import MyLibrary from "./MyLibrary";

export default {
	title: "pages/MyLibrary",
	component: MyLibrary,
} as ComponentMeta<typeof MyLibrary>;

const Template: ComponentStory<typeof MyLibrary> = () => <MyLibrary />;

export const myLibrary = Template.bind({});
