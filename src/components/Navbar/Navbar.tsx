import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Grid,
	Switch,
} from "@material-ui/core";
import LogoIcon from "../../assets/LogoIcon";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./Navbar.styles";
import { useTheme } from "@material-ui/core/styles";
import { NavbarProps } from "./Nabar.types";

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
				<Typography component="div">
					<Grid
						component="label"
						container
						alignItems="center"
						spacing={1}
					>
						<Grid item>Light</Grid>
						<Grid item>
							<Switch
								checked={theme.palette.type === "dark"}
								name="mode"
								onChange={handleModeChange}
								inputProps={{
									"aria-label": "secondary checkbox",
								}}
							/>
						</Grid>
						<Grid item>Dark</Grid>
					</Grid>
				</Typography>
			</Toolbar>
		</AppBar>
	);
}

export default Navbar;
