import { Grid, Typography, Paper } from "@material-ui/core";
import { useGame } from "../../providers/GameProvider";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./Question.styles";
import { Option, QuestionProp } from "./Question.types";
import { useTheme } from "@material-ui/core/styles";
import { SET_OPTION_CLICKED, SET_SCORE } from "../../reducers/game-reducer";
import { nextQuestion } from "../Playzone/Playzone.utils";

function Question({ question, score }: QuestionProp) {
	const theme = useTheme();
	console.log(theme);
	const classes = useStyles();
	const navigate = useNavigate();
	const {
		gameState: { optionClicked, currentQuestion, questions },
		gameDispatch,
	} = useGame();

	const changeOptionColor = (
		event: any,
		backgroundColor: string,
		color: string
	): void => {
		event.target.style.color = color;
		if (event.target.tagName === "P") {
			event.target.parentElement.style.backgroundColor = backgroundColor;
		} else {
			event.target.style.backgroundColor = backgroundColor;
		}
	};

	const handleOptionClick = (event: any, option: Option) => {
		if (!optionClicked) {
			gameDispatch({
				type: SET_OPTION_CLICKED,
				payload: { optionClicked: true },
			});
			if (option.isCorrect) {
				gameDispatch({
					type: SET_SCORE,
					payload: { score: score + 1 },
				});
				changeOptionColor(event, "green", "white");
			} else {
				changeOptionColor(event, "red", "white");
			}
			setTimeout(() => {
				changeOptionColor(
					event,
					theme.palette.background.paper,
					theme.palette.getContrastText(
						theme.palette.background.paper
					)
				);
				gameDispatch({
					type: SET_OPTION_CLICKED,
					payload: { optionClicked: false },
				});
				nextQuestion(
					currentQuestion,
					questions,
					navigate,
					gameDispatch
				);
			}, 500);
		}
	};

	return (
		<>
			<Typography
				variant="h5"
				dangerouslySetInnerHTML={{
					__html: question.question,
				}}
				className={classes.question}
				gutterBottom
			/>
			<Grid container spacing={2}>
				{question.options.map((option, index) => {
					return (
						<Grid item md={6} sm={6} xs={12} key={index}>
							<Paper
								onClick={(event) =>
									handleOptionClick(event, option)
								}
								elevation={3}
								className={classes.options}
							>
								<Typography
									align="center"
									className={classes.optionValue}
									dangerouslySetInnerHTML={{
										__html: option.value,
									}}
								/>
							</Paper>
						</Grid>
					);
				})}
			</Grid>
		</>
	);
}

export default Question;
