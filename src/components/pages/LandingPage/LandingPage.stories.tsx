import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import LandingPage from "./LandingPage";

export default {
	title: "pages/LandingPage",
	component: LandingPage,
} as ComponentMeta<typeof LandingPage>;

const Template: ComponentStory<typeof LandingPage> = () => <LandingPage />;

export const landingPage = Template.bind({});
