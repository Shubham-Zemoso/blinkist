import React from "react";
import { Button, Typography } from "@mui/material";

interface Props {
	label: string;
}
const ReadAgain = ({ label }: Props) => {
	return (
		<div style={{ width: "284px" }}>
			<Button sx={{ height: "37px" }} variant="text" color="secondary">
				<Typography variant="body1">{label}</Typography>
			</Button>
			<div
				style={{ width: "100%", height: "15px", backgroundColor: "#DFE8F6" }}
			></div>
		</div>
	);
};

export default ReadAgain;
