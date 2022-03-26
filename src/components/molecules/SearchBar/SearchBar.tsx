import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { SearchIcon } from "../../../Icons";
const SearchBar = () => {
	return (
		<div style={{ width: "912px", margin: "58px auto 0px auto" }}>
			<TextField
				color="secondary"
				variant="filled"
				placeholder="Search by title or author"
				InputProps={{
					style: {
						backgroundColor: "white",
						border: "none",
						fontSize: "24px",
						lineHeight: "30.17px",
						fontWeight: "700",
						width: "687px",
						height: "46px",
						paddingBottom: "16px",
						paddingLeft: "0px",
					},
					startAdornment: (
						<InputAdornment
							position="start"
							sx={{
								marginLeft: "0px",
								paddingLeft: "0px",
								marginRight: "27px",
							}}
						>
							<SearchIcon
								sx={{
									width: "23.7px",
									height: "23.7px",
									paddingLeft: "0px",
									marginLeft: "0px",
								}}
							/>
						</InputAdornment>
					),
				}}
				sx={{ display: "flex" }}
			/>
		</div>
	);
};

export default SearchBar;
