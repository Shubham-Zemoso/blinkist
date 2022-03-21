import React from "react";
import BookPage from "../../organisms/BookPage/BookPage";
import TabsMenu from "../../molecules/TabsMenu/TabsMenu";
import Template from "../../template/Template";
const BookDetailsPage = () => {
	return (
		<Template>
			<BookPage />
			<TabsMenu />
		</Template>
	);
};

export default BookDetailsPage;
