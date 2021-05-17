import { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./Timer.styles";
import { useGame } from "../../providers/GameProvider";
import { useNavigate } from "react-router-dom";
import { setInterval } from "timers";
import { GameContext } from "../../App.types";
import { NEXT_QUESTION } from "../../reducers/game-reducer";
import { nextQuestion } from "../Playzone/Playzone.utils";

function Timer() {
	const navigate = useNavigate();
	const {
		gameState: { currentQuestion, optionClicked, questions },
		gameDispatch,
	} = useGame() as GameContext;
	const classes = useStyles();
	const [time, setTime] = useState<number>(-1);
	if (time === 0 && !optionClicked) {
        nextQuestion(currentQuestion, questions, navigate, gameDispatch);
	}

	useEffect(() => {
		setTime(() => 30);
	}, [currentQuestion]);

	useEffect((): any => {
		const clearInterval = setInterval(() => {
			setTime((time) => time - 1);
		}, 1000);
		return clearInterval;
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
