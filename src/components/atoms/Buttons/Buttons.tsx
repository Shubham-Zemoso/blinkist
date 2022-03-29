import React from "react";
import { Button } from "@mui/material";
import NavItem from "../NavItem/NavItem";
import { StandardLonghandProperties } from "csstype";
import { Color, TypographyVariants } from "../../Types/Types";
import * as CSS from "csstype";

interface Props {
	variant?: "contained" | "text" | "outlined";
	color?: Color;
	typoColor?: Color;
	children: string;
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
	width?: StandardLonghandProperties<string | number, string>["width"];
	height?: StandardLonghandProperties<string | number, string>["height"];
	typo?: TypographyVariants;
	border?: CSS.Property.Border | number;
	id?: string;
}

const Buttons = (props: Props) => {
	const {
		children,
		startIcon,
		endIcon,
		width,
		height,
		variant,
		typo,
		typoColor,
		id,
	} = props;
	return (
		<div style={{ width: width, height: height }}>
			<Button
				data-testid={id}
				variant={variant}
				sx={{ width: "100%", alignItems: "center" }}
			>
				<NavItem
					children={children}
					startIcon={startIcon}
					endIcon={endIcon}
					typo={typo}
					color={typoColor}
				/>
			</Button>
		</div>
	);
};

export default Buttons;
