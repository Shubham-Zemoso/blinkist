import React from "react";
import { Typography } from "@mui/material";
import { TimeIcon } from "../../../Icons";
import ButtonGroup from "../../molecules/ButtonsGroup/ButtonsGroup";
import { StateProps } from "../../Types/Types";

interface Props {
	bookData: StateProps;
}

const BookDetails = ({ bookData }: Props) => {
	return (
		<div style={{ height: "304px" }}>
			<Typography variant="h1">{bookData.title}</Typography>
			<Typography
				sx={{
					marginTop: "24px",
					fontSize: "20px",
					lineHeight: "25.14px",
					fontStyle: "normal",
					fontWeight: "400",
					width: "509",
				}}
			>
				Turning Your Business into an Enduring Great Company
			</Typography>
			<Typography
				variant="body1"
				sx={{ marginTop: "24px", color: "text3.main" }}
			>
				{bookData.author}
			</Typography>
			<Typography
				variant="caption"
				sx={{ display: "flex", alignItems: "center", marginTop: "19px" }}
			>
				<TimeIcon sx={{ width: "16.67px", height: "16.67px" }} />
				<div>{bookData.minutes}</div>
			</Typography>
			<ButtonGroup />
		</div>
	);
};

export default BookDetails;
