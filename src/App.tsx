import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
	return (
		<>
			<CssBaseline />
			<div className="App">
				<Navbar />
				<Home />
			</div>
		</>
	);
}

export default App;
