import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ButtonsGroup from "./ButtonsGroup";

export default {
	title: "molecules/ButtonsGroup",
	component: ButtonsGroup,
} as ComponentMeta<typeof ButtonsGroup>;

const Template: ComponentStory<typeof ButtonsGroup> = () => <ButtonsGroup />;

export const Primary = Template.bind({});
