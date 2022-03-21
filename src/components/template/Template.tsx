import React from "react";
import Header from "../organisms/Header/Header";
import Footer from "../organisms/Footer/Footer";

interface Props {
	children: React.ReactNode;
}

const Template = ({ children }: Props) => {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Template;
