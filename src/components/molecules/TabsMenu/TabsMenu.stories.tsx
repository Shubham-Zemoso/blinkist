import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TabsMenu from "./TabsMenu";

export default {
	title: "molecules/TabsMenu",
	component: TabsMenu,
} as ComponentMeta<typeof TabsMenu>;

const Template: ComponentStory<typeof TabsMenu> = () => <TabsMenu />;

export const Tabsmenu = Template.bind({});
