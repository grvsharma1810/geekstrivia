import { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./Timer.styles";
import { useGame } from "../../providers/GameProvider";
import { useNavigate } from "react-router-dom";
import { setInterval } from "timers";
import { nextQuestion } from "../Playzone/Playzone.utils";
const TOTAL_TIME = 15

function Timer() {
	const navigate = useNavigate();
	const {
		gameState: { currentQuestion, optionClicked, questions },
		gameDispatch,
	} = useGame();
	const classes = useStyles();
	const [time, setTime] = useState<number>(-1);	

	useEffect(() => {
		if (time === 0 && !optionClicked) {
			nextQuestion(currentQuestion, questions, navigate, gameDispatch);
		}
	}, [time, optionClicked]);

	useEffect(() => {
		setTime(() => TOTAL_TIME);
	}, [currentQuestion]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime((time) => time - 1);
		}, 1000);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<Box textAlign="center" fontWeight="fontWeightBold">
			<Box fontSize={20}>Time Left</Box>
			<Box fontSize={40} className={classes.timer}>
				{Math.floor(time / 60)}:
				{time % 60 < 10 ? `0${time % 60}` : time % 60}
			</Box>
		</Box>
	);
}

export default Timer;
