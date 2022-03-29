import React from "react";
import { Container, Button, Typography } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

const LoginPage = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<Container
			maxWidth="sm"
			sx={{
				height: "500px",
				width: "500px",
				backgroundColor: "#828894",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				position: "relative",
				top: "100px",
			}}
		>
			<Typography variant="h2" align="center">
				Welcome To
			</Typography>

			<img src="Images/logo.png" alt="logo" />
			<br />
			<Button
				variant="contained"
				color="primary"
				onClick={() => loginWithRedirect({ screen_hint: "signup" })}
			>
				Sign Up
			</Button>
			<br />
			<Button
				variant="contained"
				color="primary"
				onClick={() => loginWithRedirect()}
			>
				Log In
			</Button>
		</Container>
	);
};

export default LoginPage;
