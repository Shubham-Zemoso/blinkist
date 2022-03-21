import { ComponentStory, ComponentMeta } from "@storybook/react";
import Buttons from "./Buttons";
import { AddIcon, RightArrowIcon } from "../../../Icons";

export default {
	title: "atoms/Buttons",
	component: Buttons,
} as ComponentMeta<typeof Buttons>;

const Template: ComponentStory<typeof Buttons> = (args) => (
	<Buttons {...args} />
);

export const addButton = Template.bind({});

addButton.args = {
	children: "Add to Library",
	startIcon: (
		<AddIcon sx={{ height: "24px", display: "flex", marginTop: "5px" }} />
	),
	width: "286px",
	height: "52px",
	variant: "contained",
	color: "secondary",
};

export const finishedButton = Template.bind({});

finishedButton.args = {
	children: "Finished",
	width: "170px",
	height: "44px",
	variant: "contained",
	color: "primary",
};

export const readNowButton = Template.bind({});

readNowButton.args = {
	children: "Read now",
	width: "122px",
	height: "44px",
	variant: "outlined",
	color: "primary",
};

export const sendToKindleButton = Template.bind({});

sendToKindleButton.args = {
	children: "Send to Kindle",
	width: "151px",
	height: "44px",
	variant: "text",
	color: "text2",
	endIcon: (
		<RightArrowIcon sx={{ position: "relative", left: "15px", top: "10px" }} />
	),
};
