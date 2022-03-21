import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import NavItem from "./NavItem";
import { TimeIcon, AddIcon, DownArrowIcon, Icon1 } from "../../../Icons";
export default {
	title: "atoms/Nav Item",
	component: NavItem,
} as ComponentMeta<typeof NavItem>;

const Template: ComponentStory<typeof NavItem> = (args) => (
	<NavItem {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
	children: "Add to Library",
	startIcon: (
		<AddIcon sx={{ height: "24px", display: "flex", marginTop: "5px" }} />
	),
};

export const Explore = Template.bind({});

Explore.args = {
	children: "Explore",
	endIcon: (
		<DownArrowIcon
			sx={{
				height: "24px",
				display: "flex",
				marginTop: "5px",
				position: "relative",
				left: "6.7px",
				top: "5px",
			}}
		/>
	),
};

export const Time = Template.bind({});

Time.args = {
	children: "13-minute read",
	startIcon: (
		<TimeIcon
			fontSize="large"
			sx={{ position: "relative", top: "2px", width: "22px", height: "22px" }}
		/>
	),
	typo: "caption3",
};

export const Entrepreneurship = Template.bind({});

Entrepreneurship.args = {
	children: "Entrepreneurship",
	startIcon: (
		<Icon1
			sx={{
				width: "16px",
				height: "22.05px",
				color: "text1",
			}}
		/>
	),
	width: "296px",
	left: "12px",
	typo: "caption3",
	color: "text3",
};
