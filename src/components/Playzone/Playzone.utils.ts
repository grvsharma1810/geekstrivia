import { APIQuestions, Questions } from "./Playzone.types";
import {
	NEXT_QUESTION,
	SET_GAME_STATUS,
	SKIP_QUESTION,
} from "../../reducers/actions";
import GameEndSound from "../../assets/game-end.mp3";
import { Action, GameState } from "../../App.types";
import { Option } from "../Question/Question.types";

export const nextQuestion = (
	currentQuestion: number,
	questions: Questions,
	navigate: any,
	gameDispatch: React.Dispatch<Action>
) => {
	if (currentQuestion === questions.length - 1) {
		gameDispatch({
			type: SET_GAME_STATUS,
			payload: { status: "COMPLETED" },
		});
		playSound(GameEndSound);
		navigate("/report");
	} else {
		gameDispatch({ type: NEXT_QUESTION });
	}
};

export const skipQuestion = (
	currentQuestion: number,
	questions: Questions,
	navigate: any,
	gameDispatch: React.Dispatch<Action>
) => {
	if (currentQuestion === questions.length - 1) {
		gameDispatch({
			type: SET_GAME_STATUS,
			payload: { status: "COMPLETED" },
		});
		playSound(GameEndSound);
		navigate("/report");
	} else {
		gameDispatch({ type: SKIP_QUESTION });
	}
};

export const playSound = (Sound: string): void => {
	new Audio(Sound).play();
};

export const flattenQuestionsFromAPI = (response: APIQuestions): Questions => {
	return response.questions.map((item) => {
		return {
			_id: item._id,
			questionSetId: item.questionSetId,
			question: item.question,
			options: item.options,
			skipped: false,
			selectedOption: null,
		};
	});
};
