import {
	createTheme,
	PaletteColorOptions,
	PaletteColor,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface PaletteOptions {
		text1: PaletteColorOptions;
		text2: PaletteColorOptions;
		text3: PaletteColorOptions;
		text4: PaletteColorOptions;
		p1: PaletteColorOptions;
		p2: PaletteColorOptions;
		p3: PaletteColorOptions;
	}

	interface Palette {
		text1: PaletteColor;
		text2: PaletteColor;
		text3: PaletteColor;
		text4: PaletteColor;
		p1: PaletteColor;
		p2: PaletteColor;
		p3: PaletteColor;
	}

	interface TypographyVariants {
		subtitle5: React.CSSProperties;
		caption3: React.CSSProperties;
		betaBody1: React.CSSProperties;
		betaSubtitle1: React.CSSProperties;
		subtitle3: React.CSSProperties;
	}

	interface TypographyVariantsOptions {
		subtitle5?: React.CSSProperties;
		caption3?: React.CSSProperties;
		betaBody1?: React.CSSProperties;
		betaSubtitle1?: React.CSSProperties;
		subtitle3?: React.CSSProperties;
	}
}

declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides {
		subtitle5: true;
		caption3: true;
		betaBody1: true;
		betaSubtitle1: true;
		subtitle3: true;
	}
}

declare module "@mui/material/SvgIcon" {
	interface SvgIconPropsColorOverrides {
		text: true;
		text3: true;
	}
}

const theme = createTheme({
	palette: {
		primary: {
			main: "#2CE080",
		},

		secondary: {
			main: "#0365F2",
		},

		warning: {
			main: "#DFE8F6",
		},

		p1: {
			main: "#22C870",
		},

		p2: {
			main: "#20BA68",
		},

		p3: {
			main: "#E9FAF1",
		},

		text1: {
			main: "#042330",
		},

		text2: {
			main: "#03314B",
		},

		text3: {
			main: "#6D787E",
		},

		text4: {
			main: "#747575",
		},
		background: {
			paper: "#F1F6F4",
			default: "#FFFFFF",
		},
		grey: {
			50: "#828894",
			100: "#6C787F",
			200: "#3A4649",
			300: "#042330",
		},
	},

	typography: {
		fontFamily: "'CeraPro', sans-serif",
		h1: {
			fontFamily: "'Cera Pro', sans-serif",
			fontSize: "36px",
			fontWeight: "700",
			fontStyle: "normal",
			lineHeight: "45.25px",
			textTransform: "none",
			color: "theme.palette.primary.main",
		},
		h3: {
			fontFamily: "'Cera Pro', sans-serif",
			fontSize: "24px",
			fontWeight: "700",
			fontStyle: "normal",
			lineHeight: "30.17px",
		},
		subtitle1: {
			fontFamily: "'Cera Pro', sans-serif",
			fontSize: "18px",
			fontWeight: "700",
			fontStyle: "normal",
			lineHeight: "22.63px",
			textTransform: "none",
		},
		body1: {
			fontFamily: "'Cera Pro', sans-serif",
			fontSize: "16px",
			fontWeight: "500",
			fontStyle: "normal",
			lineHeight: "20.11px",
			textTransform: "none",
		},
		caption3: {
			fontFamily: "'Cera Pro', sans-serif",
			fontSize: "14px",
			fontWeight: "400",
			fontStyle: "none",
			lineHeight: "17.6px",
			textTransform: "none",
		},
		subtitle2: {
			fontFamily: "'Cera Pro', sans-serif",
			fontSize: "18px",
			fontStyle: "normal",
			fontWeight: "400",
			lineHeight: "22.63px",
			textTransform: "none",
		},
		body2: {
			fontFamily: "'Cera Pro', sans-serif",
			fontSize: "16px",
			fontWeight: "400",
			fontStyle: "normal",
			lineHeight: "24px",
			textTransform: "none",
			color: "#6D787E",
		},
		subtitle5: {
			fontFamily: "'Cera Pro', sans-serif",
			fontSize: "20px",
			fontWeight: "400",
			fontStyle: "normal",
			lineHeight: "25.14px",
			textTransform: "none",
		},
		betaBody1: {
			fontFamily: "'Cera Pro', sans-serif",
			fontSize: "16px",
			fontWeight: "700",
			fontStyle: "normal",
			lineHeight: "24px",
			textTransform: "none",
		},
		betaSubtitle1: {
			fontFamily: "'Cera Pro', sans-serif",
			fontSize: "24px",
			fontWeight: "500",
			fontStyle: "normal",
			lineHeight: "32px",
			textTransform: "none",
		},
		subtitle3: {
			fontStyle: "normal",
			fontSize: "16px",
			fontWeight: "700",
			lineHeight: "20.11px",
			fontFamily: '"Cera Pro", sans-serif',
		},
		caption: {
			fontFamily: "'Cera Pro', sans-serif",
			fontSize: "14px",
			fontWeight: "400",
			fontStyle: "normal",
			lineHeight: "22px",
			textTransform: "none",
			color: "#6D787E",
		},
	},
});

const Color = theme.palette;

const customTheme = createTheme(theme, {
	components: {
		MuiCard: {
			styleOverrides: {
				root: {
					width: "284px",
					height: "466px",
					backgroundColor: Color.background.default,
				},
			},
		},
		MuiCardMedia: {
			styleOverrides: {
				root: {
					width: "294.1px",
					height: "292px",
				},
			},
		},
		MuiCardContent: {
			styleOverrides: {
				root: {
					height: "95px",
					padding: "17px 16px 10px 16px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-around",
					paddingTop: "23px",
					"&:hover": {
						backgroundColor: Color.background.paper,
					},
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					width: "100%",
					height: "100%",
					textTransform: "none",
				},
			},
		},
		MuiSvgIcon: {
			styleOverrides: {
				root: {
					"&:hover": {
						color: Color.secondary.main,
					},
				},
			},
		},
		MuiMenu: {
			styleOverrides: {
				root: {
					width: "120%",
					marginTop: "86px",
					height: "100%",
					padding: "0px",
					left: "0px",
				},
				paper: {
					left: "0px",
				},
				list: {
					left: "0px",
				},
			},
			defaultProps: {
				transformOrigin: {
					vertical: "bottom",
					horizontal: "right",
				},
			},
		},
		MuiMenuList: {
			styleOverrides: {
				root: {
					height: "398px",
					backgroundColor: "yellow",
				},
			},
		},
		MuiMenuItem: {
			styleOverrides: {
				root: {
					paddingLeft: "0px",
					paddingRight: "0px",
					display: "flex",
					paddingTop: "28px",
					"&:hover": {
						backgroundColor: "transparent",
					},
				},
			},
		},
		MuiTab: {
			styleOverrides: {
				root: {
					// width: '304px',
					alignItems: "flex-start",
					textTransform: "none",
					fontSize: theme.typography.body1.fontSize,
					fontWeight: theme.typography.body1.fontWeight,
					fontStyle: theme.typography.body1.fontStyle,
					lineHeight: theme.typography.body1.lineHeight,
					padding: "0px",
				},
			},
		},
		MuiPopOver: {
			defaultProps: {
				anchorOrigin: {
					vertical: "bottom",
					horizontal: "center",
				},
			},
			styleOverrides: {
				paper: {
					left: "0px",
					padding: "0px",
					height: "100%",
					backgroundColor: "lightblue",
				},
			},
		},
		MuiGrid: {
			styleOverrides: {
				item: {
					padding: "0px",
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					width: "100%",
					marginLeft: "0px",
					padding: "0px",
					display: "flex",
					flexDirection: "column",
					left: "0px",
				},
				elevation: {
					left: "0px",
				},
				rounded: {
					left: "0px",
				},
				elevation1: {
					left: "0px",
				},
				elevation8: {
					left: "0px",
				},
			},
		},
		MuiModal: {
			styleOverrides: {
				backdrop: {
					padding: "0px",
					color: "yellow",
				},
			},
		},
		MuiBackdrop: {
			styleOverrides: {
				root: {
					position: "relative",
					backgroundColor: "red",
					right: "130px",
				},
			},
		},
		MuiLink: {
			styleOverrides: {
				root: {
					textDecoration: "none",
					color: Color.text3.main,
				},
			},
		},
		MuiList: {
			styleOverrides: {
				root: {
					padding: "0px",
					left: "0px",
				},
				padding: {
					left: "0px",
				},
			},
		},
	},
});

export default customTheme;
