import { Box, Button, Container } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useGame } from "../../providers/GameProvider";
import Question from "../Question/Question";
// import { SET_GAME_STATUS } from "../../reducers/game-reducer";
import ReportHeader from "../ReportHeader/ReportHeader";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import { useStyles } from "./Report.styles";

function Report() {
	const classes = useStyles();
	const navigate = useNavigate();
	const {
		gameState: { score, questions, status },
	} = useGame();

	const playAgain = (): void => {
		navigate("/");
	};

	return (
		<Container maxWidth="md">
			<ReportHeader totalQuestions={questions.length} score={score} />
			<ScoreBoard />
			{questions.map((question, index) => {
				return (
					<div key={question._id}>
						<Box fontStyle="italic" mt={6} textAlign="center">
							Question {index + 1}
						</Box>
						<Question question={question} status={status} />
					</div>
				);
			})}
			<Box className={classes.playAgainButtonContainer}>
				<Button
					onClick={playAgain}
					variant="contained"
					color="secondary"
					size="large"
				>
					Play Again
				</Button>
			</Box>
		</Container>
	);
}

export default Report;
