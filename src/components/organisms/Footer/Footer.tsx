import React from "react";
import { Typography } from "@mui/material";
import Lists from "../../molecules/Lists/Lists";

const SideData = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				width: "378px",
				height: "120px",
			}}
		>
			<img src="Images/logo.png" alt="logo" style={{ width: "99.1px" }} />
			<Typography variant="betaSubtitle1" sx={{ color: "#0365F2" }}>
				Big ideas in small packages <br /> Start learning now
			</Typography>
		</div>
	);
};

const Footer = () => {
	return (
		<div
			style={{
				width: "100%",
				height: "370px",
				backgroundColor: "#F1F6F4",
				padding: "0px",
				display: "flex",
				marginTop: "257px",
				justifyContent: "center",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					backgroundColor: "#F1F6F4",
					height: "370px",
					width: "952px",
					justifyContent: "space-around",
				}}
			>
				<div
					style={{
						paddingTop: "0px",
						display: "flex",
						justifyContent: "space-between",
						margin: "0px auto 0px auto",
						height: "224px",
					}}
				>
					<SideData />
					<Lists />
				</div>
				<Typography
					variant="caption"
					sx={{ width: "912px", margin: "0px auto" }}
				>
					© Blinkist 2021 Sitemap | Imprint | Terms of Service | Privacy
					Policies
				</Typography>
			</div>
		</div>
	);
};

export default Footer;
