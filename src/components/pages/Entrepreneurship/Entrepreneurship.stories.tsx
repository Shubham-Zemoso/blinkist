import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Entrepreneurship from "./Entrepreneurship";

export default {
	title: "pages/Entrepreneurship",
	component: Entrepreneurship,
} as ComponentMeta<typeof Entrepreneurship>;

const Template: ComponentStory<typeof Entrepreneurship> = () => (
	<Entrepreneurship />
);

export const entrepreneurship = Template.bind({});
