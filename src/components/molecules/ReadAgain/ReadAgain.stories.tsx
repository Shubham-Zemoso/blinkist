import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ReadAgain from "./ReadAgain";

export default {
	title: "molecules/ReadAgain",
	component: ReadAgain,
} as ComponentMeta<typeof ReadAgain>;

const Template: ComponentStory<typeof ReadAgain> = (args) => (
	<ReadAgain {...args} />
);

export const Readagain = Template.bind({});

Readagain.args = {
	label: "Read again",
};

export const Finished = Template.bind({});

Finished.args = {
	label: "Finished",
};
