import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "./Header";

export default {
	title: "organisms/Header",
	component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const headerPart = Template.bind({});
