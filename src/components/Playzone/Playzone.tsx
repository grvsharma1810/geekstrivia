import { CircularProgress, Box, Container, Button } from "@material-ui/core";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGame } from "../../providers/GameProvider";
import { useStyles } from "./Playzone.styles";
import { getQuestions } from "./Playzone.services";
import {
	SET_GAME_STATUS,
	SET_QUESTIONS,
} from "../../reducers/game-reducer";
import Question from "../Question/Question";
import Timer from "../Timer/Timer";
import GameStartSound from "../../assets/game-start.mp3";
import { skipQuestion, playSound } from "./Playzone.utils";

function Playzone() {
	const navigate = useNavigate();
	const { gameState, gameDispatch } = useGame();
	console.log(gameState);
	const { questions, currentQuestion, score, status } = gameState;
	const { state } = useLocation() as any;
	const classes = useStyles();
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		(async function () {
			const questions = await getQuestions(
				state.categoryId,
				state.difficulty
			);
			if ("errorMessage" in questions) {
				// Handle error
			} else {
				gameDispatch({ type: SET_QUESTIONS, payload: { questions } });
			}
			gameDispatch({
				type: SET_GAME_STATUS,
				payload: { status: "RUNNING" },
			});
			playSound(GameStartSound);
			setIsLoading(false);
		})();
	}, [state, gameDispatch]);

	const handleSkipQuestion = () => {
		skipQuestion(currentQuestion, questions, navigate, gameDispatch);
	};

	return (
		<>
			{isLoading ? (
				<Box display="flex" justifyContent="center" p={4}>
					<CircularProgress />
				</Box>
			) : (
				<Box mt={3} mb={3}>
					<Container maxWidth="md" className={classes.questionHeader}>
						<Timer />
						<Box textAlign="center" fontWeight="fontWeightBold">
							<Box fontSize={20}>Score</Box>
							<Box fontSize={40} className={classes.score}>
								{score}/{questions.length}
							</Box>
						</Box>
					</Container>
					<Container maxWidth="md">
						<Question
							question={questions[currentQuestion]}
							score={score}
							status={status}
						/>
					</Container>
					<Container
						maxWidth="md"
						className={classes.skipButtonContainer}
					>
						<Button
							variant="contained"
							onClick={handleSkipQuestion}
						>
							Skip Question
						</Button>
					</Container>
				</Box>
			)}
		</>
	);
}

export default Playzone;
