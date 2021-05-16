import {
	CircularProgress,
	Box,
	Container,
	Button,
} from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGame } from "../../providers/GameProvider";
import { useStyles } from "./Playzone.styles";
import { getQuestions } from "./Playzone.services";
import { GameContext } from "../../App.types";
import { NEXT_QUESTION, SET_QUESTIONS } from "../../reducers/game-reducer";
import Question from "../Question/Question";

function Playzone() {
	const {
		gameState: { questions, currentQuestion, score },
		gameDispatch,
	} = useGame() as GameContext;
	const { state } = useLocation() as any;
	console.log({ questions, currentQuestion, score });
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
			setIsLoading(false);
		})();
	}, [state, gameDispatch]);

	const skipQuestion = () => {
		gameDispatch({ type: NEXT_QUESTION });
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
						<Box>Timer</Box>
						<Box textAlign="center" fontWeight="fontWeightBold">
							<Box fontSize={20}>Score</Box>
							<Box fontSize={40} className={classes.score}>
								{score}
							</Box>
						</Box>
					</Container>
					<Container maxWidth="md">
						<Question
							question={questions[currentQuestion]}
							score={score}
						/>
					</Container>
					<Container
						maxWidth="md"
						className={classes.skipButtonContainer}
					>
						<Button variant="contained" onClick={skipQuestion}>
							Skip Question
						</Button>
					</Container>
				</Box>
			)}
		</>
	);
}

export default Playzone;
