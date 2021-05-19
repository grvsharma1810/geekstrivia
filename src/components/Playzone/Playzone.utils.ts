import { APIQuestions, Questions } from "./Playzone.types";
import { NEXT_QUESTION } from "../../reducers/game-reducer";
import GameEndSound from "../../assets/game-end.mp3";
import { Action } from "../../App.types";
import { Option } from "../Question/Question.types";

export const nextQuestion = (
	currentQuestion: number,
	questions: Questions,
	navigate: any,
	gameDispatch: React.Dispatch<Action>
) => {
	if (currentQuestion === questions.length - 1) {
		playSound(GameEndSound);
		navigate("/report");
	} else {
		gameDispatch({ type: NEXT_QUESTION });
	}
};

export const playSound = (Sound: string): void => {
	new Audio(Sound).play();
};

export const flattenQuestionsFromAPI = (response: APIQuestions): Questions => {
	return response.results.map((item) => {
		let options: Option[] = [
			...item.incorrect_answers.map(
				(answer) =>
					({
						value: answer,
						isCorrect: false,
					})
			),
		];
		options.splice(Math.floor(Math.random() * 3), 0, {
			value: item.correct_answer,
			isCorrect: true,
		});

		return {
			category: item.category,
			type: item.type,
			difficulty: item.difficulty,
			question: item.question,
			options: options,
		};
	});
};
