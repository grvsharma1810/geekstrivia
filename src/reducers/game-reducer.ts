import { GameState, Action } from "../App.types";

export const SET_QUESTIONS = "setQuestions";
export const NEXT_QUESTION = "nextQuestion";
export const SKIP_QUESTION = "skipQuestion";
export const SET_SCORE = "setScore";
export const SET_OPTION_CLICKED = "setOptionClicked";
export const SET_SELECTED_OPTION = "setSelectedOption";

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

		case SKIP_QUESTION:
			return {
				...state,
				questions: state.questions.map((question, index) =>
					index !== state.currentQuestion
						? question
						: { ...question, skipped: true }
				),
				currentQuestion: state.currentQuestion + 1,
			};

		case SET_SELECTED_OPTION:
			return {
				...state,
				questions: state.questions.map((question, index) =>
					index !== state.currentQuestion
						? question
						: { ...question, selectedOption: action.payload.option}
				),
			};

		default:
			return state;
	}
};
