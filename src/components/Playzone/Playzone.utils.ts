import { Questions } from "./Playzone.types";
import { NEXT_QUESTION } from "../../reducers/game-reducer";
import GameEndSound from "../../assets/game-end.mp3";

export function nextQuestion(
	currentQuestion: number,
	questions: Questions,
	navigate: any,
	gameDispatch: React.Dispatch<any>
) {
	if (currentQuestion === questions.length - 1) {
		playSound(GameEndSound);
		navigate("/report");
	} else {
		gameDispatch({ type: NEXT_QUESTION });
	}
}

export const playSound = (Sound: string) => {
	const audio = document.createElement("audio");
	audio.src = Sound;
	audio.play();
};
