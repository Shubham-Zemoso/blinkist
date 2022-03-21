import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import DropDown from "./DropDown";

export default {
	title: "organisms/DropDown",
	component: DropDown,
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => (
	<DropDown {...args} />
);

const handleClose = () => {
	console.log("handle close");
};
export const Dropdown = Template.bind({});
Dropdown.args = {
	handleClose: handleClose,
	anchorEl: null,
};
