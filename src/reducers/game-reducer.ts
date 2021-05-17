import { GameState, Action } from "../App.types";

export const SET_QUESTIONS = "setQuestions";
export const NEXT_QUESTION = "nextQuestion";
export const SET_SCORE = "setScore";
export const SET_OPTION_CLICKED = "setOptionClicked";

export const GameReducer = (
	state: GameState,
	{ type, payload }: Action
): GameState => {
	switch (type) {
		case SET_QUESTIONS:
			return {
				...state,
				questions: payload.questions,
			};

		case SET_SCORE:
			return {
				...state,
				score: payload.score,
			};

		case NEXT_QUESTION:
			return {
				...state,
				currentQuestion: state.currentQuestion + 1,
			};

		case SET_OPTION_CLICKED:
			return {
				...state,
				optionClicked: payload.optionClicked,
			};

		default:
			return state;
	}
};
