import React from "react";
import "./App.css";
import MyLibrary from "./components/pages/MyLibrary/MyLibrary";
import LandingPage from "./components/pages/LandingPage/LandingPage";
import BookDetailsPage from "./components/pages/BookDetailsPage/BookDetailsPage";
import { ThemeProvider } from "@mui/material";
import customTheme from "./Themes/customThemes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
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
}

export default App;
