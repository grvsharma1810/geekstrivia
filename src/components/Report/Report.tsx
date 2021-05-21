import { Box, Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useGame } from "../../providers/GameProvider";
import ReportHeader from "../ReportHeader/ReportHeader";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import { useStyles } from "./Report.styles";

function Report() {
	const classes = useStyles();
	const {
		gameState: { score, questions },
	} = useGame();

	return (
		<Container maxWidth="md">
			<ReportHeader />
			<ScoreBoard />
			<Box className={classes.playAgainButtonContainer}>
				<Link to="/" style={{ textDecoration: "none" }}>
					<Button variant="contained" color="secondary" size="large">
						Play Again
					</Button>
				</Link>
			</Box>
		</Container>
	);
}

export default Report;
