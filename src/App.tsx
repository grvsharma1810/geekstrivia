import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "@material-ui/core";
import { lightTheme, darkTheme } from "./theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import Playzone from "./components/Playzone/Playzone";
import { Routes, Route } from "react-router-dom";
import { GameProvider } from "./providers/GameProvider";
import Report from "./components/Report/Report";
import { useState } from "react";

function App() {
	const [mode, setMode] = useState<string>("light");

	return (
		<ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
			<CssBaseline />
			<Navbar setMode={setMode} />
			<Routes>
				<Route path="/" element={<Home />} />
				<GameProvider>
					<Routes>
						<Route path="/playzone" element={<Playzone />} />
						<Route path="/report" element={<Report />} />
					</Routes>
				</GameProvider>
			</Routes>
		</ThemeProvider>
	);
}

export default App;
