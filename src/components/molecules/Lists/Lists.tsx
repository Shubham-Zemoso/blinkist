import React from "react";
import { List, ListItem, Typography } from "@mui/material";
const Lists = () => {
	return (
		<div>
			<List
				sx={{
					display: "flex",
					justifyContent: "space-around",
					alignItems: "flex-start",
					width: "542px",
				}}
			>
				<List
					sx={{
						width: "214px",
						display: "flex",
						flexDirection: "column",
						paddingTop: "0px",
					}}
				>
					<ListItem sx={{ paddingTop: "0px" }}>
						<Typography variant="betaBody1">Editorial</Typography>
					</ListItem>
					<ListItem>
						<Typography variant="body2">Book lists</Typography>
					</ListItem>
					<ListItem>
						<Typography variant="body2">What is Nonfiction?</Typography>
					</ListItem>
					<ListItem>
						<Typography variant="body2">What to read next?</Typography>
					</ListItem>
					<ListItem>
						<Typography variant="body2">Benefits of reading</Typography>
					</ListItem>
				</List>
				<List
					sx={{
						width: "132px",
						height: "224px",
						paddingLeft: "0px",
						paddingRight: "0px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						paddingTop: "0px",
					}}
				>
					<ListItem sx={{ paddingLeft: "0px", paddingTop: "0px" }}>
						<Typography variant="betaBody1">Useful links</Typography>
					</ListItem>
					<ListItem sx={{ paddingLeft: "0px" }}>
						<Typography variant="body2">Pricing</Typography>
					</ListItem>
					<ListItem sx={{ paddingLeft: "0px", paddingRight: "0px" }}>
						<Typography variant="body2" sx={{ marginRight: "0px" }}>
							Blinkist business
						</Typography>
					</ListItem>
					<ListItem sx={{ paddingLeft: "0px" }}>
						<Typography variant="body2">Gift cards</Typography>
					</ListItem>
					<ListItem sx={{ paddingLeft: "0px", paddingRight: "0px" }}>
						<Typography variant="body2">Blinkist magaine</Typography>
					</ListItem>
					<ListItem sx={{ paddingLeft: "0px" }}>
						<Typography variant="body2">Contact & help</Typography>
					</ListItem>
				</List>
				<List
					sx={{
						width: "132px",
						height: "184px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						paddingTop: "0px",
					}}
				>
					<ListItem sx={{ paddingLeft: "0px", paddingTop: "0px" }}>
						<Typography variant="betaBody1">Company</Typography>
					</ListItem>
					<ListItem sx={{ paddingLeft: "0px" }}>
						<Typography variant="body2">About</Typography>
					</ListItem>
					<ListItem sx={{ paddingLeft: "0px" }}>
						<Typography variant="body2">Careers</Typography>
					</ListItem>
					<ListItem sx={{ paddingLeft: "0px" }}>
						<Typography variant="body2">partners</Typography>
					</ListItem>
					<ListItem sx={{ paddingLeft: "0px", paddingRight: "0px" }}>
						<Typography variant="body2">Code of Conduct</Typography>
					</ListItem>
				</List>
			</List>
		</div>
	);
};

export default Lists;
