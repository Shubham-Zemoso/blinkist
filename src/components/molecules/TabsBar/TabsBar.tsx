import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import BookGrid from "../../organisms/BookGrid/BookGrid";
import ReadAgain from "../ReadAgain/ReadAgain";

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
	return <Typography variant="subtitle2">{children}</Typography>;
};

const TabsBar = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<div
			style={{ display: "flex", justifyContent: "center", marginLeft: "24px" }}
		>
			<Box
				sx={{
					marginTop: "60px",
					color: "text2.main",
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					paddingLeft: "0px",
				}}
			>
				<Box sx={{ borderBottom: 1, borderColor: "divider", width: "912px" }}>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
					>
						<Tab
							disableRipple
							label={<Label children="Currently reading" />}
							{...a11yProps(0)}
							sx={{ width: "304px", color: "text2.main" }}
						/>
						<Tab
							disableRipple
							label={<Label children="Finished" />}
							{...a11yProps(1)}
							sx={{ width: "304px", color: "text2.main" }}
						/>
					</Tabs>
				</Box>
				<TabPanel value={value} index={0}>
					<BookGrid
						label="currentlyReading"
						children={<ReadAgain label="Finished" />}
					/>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<BookGrid
						label="finished"
						children={<ReadAgain label="Read Again" />}
					/>
				</TabPanel>
			</Box>
		</div>
	);
};

export default TabsBar;
