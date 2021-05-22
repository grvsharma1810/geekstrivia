import { Grid, Typography, Paper } from "@material-ui/core";
import { useGame } from "../../providers/GameProvider";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./Question.styles";
import { Option, QuestionProp } from "./Question.types";
import { useTheme } from "@material-ui/core/styles";
import {
	SET_OPTION_CLICKED,
	SET_SCORE,
	SET_SELECTED_OPTION,
} from "../../reducers/game-reducer";
import { nextQuestion } from "../Playzone/Playzone.utils";
import { getCorrectOptionIndex } from "./Question.utils";
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function Question({ question, score, status }: QuestionProp) {
	const theme = useTheme();
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

	const handleOptionClick = (
		event: any,
		option: Option,
		optionIndex: number
	): void => {
		if (!optionClicked) {
			gameDispatch({
				type: SET_OPTION_CLICKED,
				payload: { optionClicked: true },
			});
			if (option.isCorrect && score !== undefined) {
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
				gameDispatch({
					type: SET_SELECTED_OPTION,
					payload: { option: optionIndex },
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
			{status === "RUNNING" ? (
				<Grid container spacing={2}>
					{question.options.map((option, index) => {
						return (
							<Grid item md={6} sm={6} xs={12} key={index}>
								<Paper
									onClick={(event) =>
										handleOptionClick(event, option, index)
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
			) : (
				<>
					{question.selectedOption ===
					getCorrectOptionIndex(question.options) ? (
						<Grid container spacing={2}>
							{question.options.map((option, index) => {
								return (
									<Grid
										item
										md={6}
										sm={6}
										xs={12}
										key={index}
									>
										<Paper
											elevation={3}
											className={`${classes.options} ${
												option.isCorrect
													? classes.correctOption
													: ""
											}`}
										>											
											<Typography
												align="center"
												className={classes.optionValue}												
											>
												{option.isCorrect && <CheckCircleIcon/>}
												&nbsp;&nbsp;
												<span dangerouslySetInnerHTML={{
													__html: option.value,
												}}/>
											</Typography>
										</Paper>
									</Grid>
								);
							})}
						</Grid>
					) : (
						<Grid container spacing={2}>
							{question.options.map((option, index) => {
								return (
									<Grid
										item
										md={6}
										sm={6}
										xs={12}
										key={index}
									>
										<Paper
											elevation={3}
											className={`${classes.options} ${
												option.isCorrect
													? classes.correctOption
													: ""
											} ${
												index ===
												question.selectedOption
													? classes.wrongOption
													: ""
											}`}
										>
											<Typography
												align="center"
												className={classes.optionValue}
											>
												{index ===
													question.selectedOption && (
													<CancelIcon />
												)}&nbsp;&nbsp;
												<span
													dangerouslySetInnerHTML={{
														__html: option.value,
													}}
												/>
											</Typography>
										</Paper>
									</Grid>
								);
							})}
						</Grid>
					)}
				</>
			)}
		</>
	);
}

export default Question;
