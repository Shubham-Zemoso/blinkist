import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TabsBar from "./TabsBar";

export default {
	title: "molecules/TabsBar",
	component: TabsBar,
} as ComponentMeta<typeof TabsBar>;

const Template: ComponentStory<typeof TabsBar> = () => <TabsBar />;

export const Tabsbar = Template.bind({});
