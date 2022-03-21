import React from "react";
import TabsBar from "../../molecules/TabsBar/TabsBar";
import NavItem from "../../atoms/NavItem/NavItem";
import Template from "../../template/Template";
const MyLibrary = () => {
	return (
		<Template>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: "90px",
					marginBottom: "60px",
				}}
			>
				<NavItem children="My Library" typo="h1" width="912px" />
			</div>
			<TabsBar />
		</Template>
	);
};

export default MyLibrary;
