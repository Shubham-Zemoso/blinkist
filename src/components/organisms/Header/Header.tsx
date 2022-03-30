import React, { useState } from "react";
import {
	Link,
	AppBar,
	Typography,
	IconButton,
	Toolbar,
	Container,
	Button,
} from "@mui/material";
import LogOutButton from "../../molecules/LogOutButton/LogOutButton";
import { SearchIcon, DownArrowIcon, UpArrowIcon } from "../../../Icons";
import DropDown from "../DropDown/DropDown";

const Header = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (anchorEl === null) setAnchorEl(event.currentTarget);
		else {
			handleClose();
		}
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div
			style={{
				height: "86px",
				position: "relative",
				top: "0px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<AppBar
				color="transparent"
				position="relative"
				sx={{
					boxShadow: "none",
					width: "952px",
					height: "86px",
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Container>
					<Toolbar
						disableGutters
						sx={{ display: "flex", justifyContent: "space-between" }}
					>
						<div style={{ display: "flex", alignItems: "center" }}>
							<Link href="/">
								<img src="/Images/logo.png" alt="logo" />
							</Link>
							<SearchIcon sx={{ fontSize: "20.31px", marginLeft: "43.91px" }} />
							<Typography
								variant="body1"
								sx={{
									fontWeight: "500",
									marginLeft: "41.69px",
									color: "#03314B",
								}}
							>
								Explore
							</Typography>
							<IconButton
								onClick={handleClick}
								disableRipple
								sx={{ width: "10.61px", margin: "0px 40.7px 0px 6.7px" }}
							>
								{!anchorEl ? (
									<DownArrowIcon
										data-testid="downArrow"
										sx={{ marginTop: "15px", marginLeft: "5px" }}
									/>
								) : (
									<UpArrowIcon data-testid="upArrow" />
								)}
							</IconButton>

							<Link href="/" sx={{ textDecoration: "none" }}>
								<Typography
									variant="body1"
									sx={{
										fontWeight: "500",
										color: "#03314B",
									}}
								>
									My Library
								</Typography>
							</Link>
						</div>
						<div style={{ display: "flex" }}>
							<Button disableRipple>
								<LogOutButton />
							</Button>
						</div>
					</Toolbar>
				</Container>
			</AppBar>
			<div>
				{anchorEl && <DropDown anchorEl={anchorEl} handleClose={handleClose} />}
			</div>
		</div>
	);
};

export default Header;
