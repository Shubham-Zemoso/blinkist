import React from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3, paddingLeft: "0px" }}>{children}</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

interface Props {
	children: string;
}
const Label = ({ children }: Props) => {
	return <Typography variant="body1">{children}</Typography>;
};

const TabsMenu = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const content = () => {
		return (
			<div>
				Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s
				essential
				<br /> 1992 business handbook, Beyond Entrepreneurship for the
				entrepreneurs,
				<br /> visionaries, and innovators of today. This new edition combines
				the timeless
				<br /> business advice and strategy of the original text, supplemented
				with <br />
				cutting-edge insights and case studies pertinent to today’s business
				world.
			</div>
		);
	};

	return (
		<div
			style={{ display: "flex", justifyContent: "center", marginLeft: "24px" }}
		>
			<Box
				sx={{
					marginTop: "72px",
					color: "text2.main",
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					paddingLeft: "0px",
				}}
			>
				<Box sx={{ borderBottom: 1, borderColor: "divider", width: "600px" }}>
					<Tabs
						textColor="inherit"
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
					>
						<Tab
							disableRipple
							label={<Label children="Synopsis" />}
							{...a11yProps(0)}
							sx={{ width: "200px", color: "text2.main" }}
						/>
						<Tab
							disableRipple
							label={<Label children="Who is it for?" />}
							{...a11yProps(1)}
							sx={{ width: "200px", color: "text2.main" }}
						/>
						<Tab
							disableRipple
							label={<Label children="About the author" />}
							{...a11yProps(2)}
							sx={{ width: "200px", color: "text2.main" }}
						/>
					</Tabs>
				</Box>
				<TabPanel value={value} index={0}>
					<div style={{ width: "912px" }}>
						<Typography
							variant="body2"
							sx={{
								marginTop: "20px",
								width: "620px",
								color: "text2.main",
								paddingLeft: "0px",
							}}
						>
							{content()}
						</Typography>
					</div>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<div style={{ width: "912px" }}>
						<Typography
							variant="body2"
							sx={{ marginTop: "20px", width: "620px", color: "text2.main" }}
						>
							{content()}
						</Typography>
					</div>
				</TabPanel>
				<TabPanel value={value} index={2}>
					<div style={{ width: "912px" }}>
						<Typography
							variant="body2"
							sx={{ marginTop: "20px", width: "620px", color: "text2.main" }}
						>
							{content()}
						</Typography>
					</div>
				</TabPanel>
			</Box>
		</div>
	);
};

export default TabsMenu;
