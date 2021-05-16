import { AppBar, Toolbar, Typography } from "@material-ui/core";
import LogoIcon from "../../assets/LogoIcon";
import { useNavigate } from "react-router-dom";

function Navbar() {
	const navigate = useNavigate();

	return (
		<AppBar position="sticky">
			<Toolbar>
				<LogoIcon
					onClick={() => navigate("/")}
					style={{ fontSize: "2rem", cursor: "pointer" }}
				/>
				<Typography
					variant="h6"
					noWrap
					onClick={() => navigate("/")}
					style={{ cursor: "pointer" }}
				>
					Geeks Trivia
				</Typography>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
