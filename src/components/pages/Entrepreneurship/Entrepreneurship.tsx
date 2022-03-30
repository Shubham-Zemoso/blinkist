import React from "react";
import Banner from "../../organisms/Banner/Banner";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import BooksGroup from "../../organisms/BooksGroup/BooksGroup";
import Template from "../../template/Template";

const Entrepreneurship = () => {
	return (
		<Template>
			<Banner />
			<SearchBar />
			<BooksGroup title="Trending Blinks" />
		</Template>
	);
};

export default Entrepreneurship;
