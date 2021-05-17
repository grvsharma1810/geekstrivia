import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Playzone from "./components/Playzone/Playzone";
import { Routes, Route } from "react-router-dom";
import { GameProvider } from "./providers/GameProvider";
import Report from "./components/Report/Report";

function App() {
	return (
		<>
			<CssBaseline />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<GameProvider>
					<Routes>
						<Route path="/playzone" element={<Playzone />} />
						<Route path="/report" element={<Report />} />
					</Routes>
				</GameProvider>
			</Routes>
		</>
	);
}

export default App;
