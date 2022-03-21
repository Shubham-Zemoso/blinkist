import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchComponent from "./SearchBar";

export default {
	title: "molecules/SearchComponent",
	component: SearchComponent,
} as ComponentMeta<typeof SearchComponent>;

const Template: ComponentStory<typeof SearchComponent> = () => (
	<SearchComponent />
);

export const Searchcomponent = Template.bind({});
