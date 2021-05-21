import { Box, Grid } from "@material-ui/core";
import { useStyles } from "./ScoreBoard.styles";
import { useGame } from "../../providers/GameProvider";
import {
	getCorrectAnswersCount,
	getSkippedQuestionsCount,
} from "./ScoreBoard.utils";

function ScoreBoard() {
	const classes = useStyles();
	const {
		gameState: { questions },
	} = useGame();

	return (
		<Grid container className={classes.scoreBoard}>
			<Grid
				className={classes.score}
				item
				xs={6}
				style={{
					borderRight: "1.5px solid white",
					borderBottom: "1.5px solid white",
				}}
			>
				Total Questions <br />
				<Box className={classes.points}>{questions.length}</Box>
			</Grid>
			<Grid
				className={classes.score}
				item
				xs={6}
				style={{ borderBottom: "1.5px solid white" }}
			>
				Skipped Questions <br />
				<Box className={classes.points}>
					{getSkippedQuestionsCount(questions)}
				</Box>
			</Grid>
			<Grid
				className={classes.score}
				item
				xs={6}
				style={{ borderRight: "1.5px solid white" }}
			>
				Correct Answers <br />
				<Box className={classes.points}>
					{getCorrectAnswersCount(questions)}
				</Box>
			</Grid>
			<Grid className={classes.score} item xs={6}>
				Wrong Answers <br />
				<Box className={classes.points}>
					{questions.length -
						getCorrectAnswersCount(questions) -
						getSkippedQuestionsCount(questions)}
				</Box>
			</Grid>
		</Grid>
	);
}

export default ScoreBoard;
