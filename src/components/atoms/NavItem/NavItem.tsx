import React from "react";
import { Typography } from "@mui/material";
import { TypographyVariants, Color } from "../../Types/Types";
import { StandardLonghandProperties } from "csstype";

interface Props {
	children: string;
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
	typo?: TypographyVariants;
	width?: StandardLonghandProperties<string | number, string>["width"];
	height?: StandardLonghandProperties<string | number, string>["height"];
	left?: StandardLonghandProperties<string | number, string>["left"];
	color?: Color;
}
const NavItem = ({
	color,
	children,
	startIcon,
	endIcon,
	typo,
	width,
	height,
	left,
}: Props) => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				width: width,
				height: height,
			}}
		>
			<div data-testid="startIcon">{startIcon}</div>
			<Typography
				variant={typo}
				sx={{ position: "relative", left: left, color: `${color}.main` }}
			>
				{children}
			</Typography>
			<div data-testid="endIcon">{endIcon}</div>
		</div>
	);
};

export default NavItem;
