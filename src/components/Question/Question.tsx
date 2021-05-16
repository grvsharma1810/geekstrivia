import { Grid, Typography, Paper } from "@material-ui/core";
import { useGame } from "../../providers/GameProvider";
import { useStyles } from "./Question.styles";
import { Option, QuestionProp } from "./Question.types";
import { GameContext } from "../../App.types";
import { NEXT_QUESTION, SET_SCORE } from "../../reducers/game-reducer";

function Question({ question, score }: QuestionProp) {
	const classes = useStyles();
	const { gameDispatch } = useGame() as GameContext;
	let optionClicked = false;

	const changeOptionColor = (
		event: any,
		backgroundColor: string,
		color: string
	) => {
		event.target.style.color = color;
		if (event.target.tagName === "P") {
			event.target.parentElement.style.backgroundColor = backgroundColor;
		} else {
			event.target.style.backgroundColor = backgroundColor;
		}
	};

	const handleOptionClick = (event: any, option: Option) => {
		if (!optionClicked) {
			optionClicked = true;
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
				changeOptionColor(event, "inherit", "inherit");
				gameDispatch({ type: NEXT_QUESTION });
				optionClicked = false;
			}, 1000);
		}
	};

	return (
		<>
			<Typography
				variant="h5"
				dangerouslySetInnerHTML={{
					__html: question.question,
				}}
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
