export type Variant = "text" | "outlined" | "contained" | undefined;

export type Color =
	| "inherit"
	| "primary"
	| "secondary"
	| "success"
	| "error"
	| "info"
	| "warning"
	| "text1"
	| "text2"
	| "text3"
	| "text4"
	| "p1"
	| "p2"
	| "p3"
	| undefined;

export type TypographyVariants =
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	| "subtitle1"
	| "subtitle2"
	| "body1"
	| "body2"
	| "caption"
	| "button"
	| "overline"
	| "subtitle5"
	| "caption3"
	| "inherit"
	| "betaBody1"
	| "subtitle3"
	| undefined;

export interface StateProps {
	id: string;
	image?: string;
	title?: string;
	author?: string;
	minutes?: string;
	reads?: string;
	status?: string;
	type?: string;
}
