import React from "react";
import { Typography } from "@mui/material";

const Banner = () => {
	return (
		<div
			style={{ display: "flex", justifyContent: "center", marginTop: "32px" }}
		>
			<div
				style={{
					display: "flex",
					width: "912px",
					backgroundColor: "#F1F6F4",
					height: "264px",
					justifyContent: "center",
				}}
			>
				<div style={{ margin: "45px" }}>
					<Typography variant="h1">
						Explore Books on <br /> entrepreneurship
					</Typography>
					<Typography
						variant="subtitle2"
						sx={{ color: "#6D787E", marginTop: "15px" }}
					>
						Everything you need to know about thriving on a <br /> shoestring
						budget, making your first million, and hiring <br />
						right from the start.
					</Typography>
				</div>
				<img
					style={{ margin: "17px 45px 67px" }}
					src="Images/banner.png"
					alt="banner"
				/>
			</div>
		</div>
	);
};

export default Banner;
