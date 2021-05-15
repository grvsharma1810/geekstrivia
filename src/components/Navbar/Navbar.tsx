import { AppBar, Toolbar, Typography } from "@material-ui/core";
import LogoIcon from "../../assets/LogoIcon";

function Navbar() {
	return (
		<AppBar position="sticky">
			<Toolbar>
				<LogoIcon style={{ fontSize: "2rem" }} />
				<Typography variant="h6" noWrap>
					Geeks Trivia
				</Typography>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
