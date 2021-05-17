import { GameState, Action } from "../App.types";

export const SET_QUESTIONS = "setQuestions";
export const NEXT_QUESTION = "nextQuestion";
export const SET_SCORE = "setScore";
export const SET_OPTION_CLICKED = "setOptionClicked";

export const GameReducer = (state: GameState, action: Action): GameState => {
	switch (action.type) {
		case SET_QUESTIONS:
			return {
				...state,
				questions: action.payload.questions,
			};

		case SET_SCORE:
			return {
				...state,
				score: action.payload.score,
			};

		case NEXT_QUESTION:
			return {
				...state,
				currentQuestion: state.currentQuestion + 1,
			};

		case SET_OPTION_CLICKED:
			return {
				...state,
				optionClicked: action.payload.optionClicked,
			};

		default:
			return state;
	}
};
