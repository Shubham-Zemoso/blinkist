import React from "react";
import "./App.css";
import MyLibrary from "./components/pages/MyLibrary/MyLibrary";
import LandingPage from "./components/pages/LandingPage/LandingPage";
import BookDetailsPage from "./components/pages/BookDetailsPage/BookDetailsPage";
import { ThemeProvider } from "@mui/material";
import customTheme from "./Themes/customThemes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
	const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isAuthenticated) {
		return (
			<ThemeProvider theme={customTheme}>
				<Router>
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route path="/mylibrary" element={<MyLibrary />} />
						<Route path="/bookdetails/:id" element={<BookDetailsPage />} />
					</Routes>
				</Router>
			</ThemeProvider>
		);
	} else {
		return (
			<div>
				<button onClick={() => loginWithRedirect()}>Log In</button>
			</div>
		);
	}
}

export default App;
