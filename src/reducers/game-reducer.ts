import { GameState, Action } from "../App.types";
import {
	NEXT_QUESTION,
	SET_GAME_STATUS,
	SET_OPTION_CLICKED,
	SET_QUESTIONS,
	SET_SCORE,
	SET_SELECTED_OPTION,
	SKIP_QUESTION,
} from "./actions";

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
						: { ...question, selectedOption: action.payload.option }
				),
			};

		case SET_GAME_STATUS:
			return {
				...state,
				status: action.payload.status,
			};

		default:
			return state;
	}
};
