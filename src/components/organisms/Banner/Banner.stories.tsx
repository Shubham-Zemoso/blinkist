import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Banner from "./Banner";

export default {
	title: "organisms/Banner",
	component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = () => <Banner />;

export const Tabsbar = Template.bind({});
Tabsbar.storyName = "Banner Part";
