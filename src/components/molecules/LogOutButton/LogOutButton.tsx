import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { DownArrowIcon, UpArrowIcon } from "../../../Icons";

const LogOutButton = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (!anchorEl) {
			setAnchorEl(event.currentTarget);
		} else {
			handleClose();
		}
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const { logout } = useAuth0();

	return (
		<div>
			<Button
				disableRipple
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
				<Avatar
					sx={{
						display: "flex",
						justifyContent: "flexEnd",
						backgroundColor: "#69A6E3",
					}}
				>
					S
				</Avatar>
				{anchorEl ? (
					<UpArrowIcon sx={{ color: "text2.main" }} />
				) : (
					<DownArrowIcon
						sx={{
							marginTop: "15px",
							marginLeft: "5px",
							color: "text2.main",
						}}
					/>
				)}
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
				sx={{
					width: "150px",
					display: "flex",
					justifyContent: "center",
					marginTop: "0px",
					marginLeft: "0px",
				}}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "center",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "center",
				}}
			>
				<MenuItem
					sx={{
						height: "50px",
						display: "flex",
						alignItems: "center",
						padding: "0px",
						justifyContent: "center",
					}}
					onClick={() => logout({ returnTo: window.location.origin })}
				>
					Logout
				</MenuItem>
			</Menu>
		</div>
	);
};

export default LogOutButton;
