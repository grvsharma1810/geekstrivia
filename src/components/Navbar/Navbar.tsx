import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Grid,
	Switch,
	IconButton,
} from "@material-ui/core";
import LogoIcon from "../../assets/LogoIcon";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./Navbar.styles";
import { useTheme } from "@material-ui/core/styles";
import { NavbarProps } from "./Nabar.types";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

function Navbar({ setMode }: NavbarProps) {
	const theme = useTheme();
	const classes = useStyles();
	const navigate = useNavigate();

	const handleModeChange = () => {
		if (theme.palette.type === "light") {
			setMode(() => "dark");
		} else {
			setMode(() => "light");
		}
	};

	return (
		<AppBar position="sticky" className={classes.root}>
			<Toolbar>
				<LogoIcon
					onClick={() => navigate("/")}
					className={classes.menuButton}
				/>
				<Typography className={classes.title} variant="h6" noWrap>
					Geeks Trivia
				</Typography>
				<IconButton aria-label="mode" onClick={handleModeChange}>
					{theme.palette.type === "light" && (
						<Brightness4Icon style={{ color: "white" }} />
					)}
					{theme.palette.type === "dark" && (
						<Brightness7Icon style={{ color: "white" }} />
					)}
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
