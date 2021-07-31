import {	
	NEXT_QUESTION,
	SET_GAME_STATUS,
	SET_QUESTIONS,
	SET_SCORE,
	SET_SELECTED_OPTION,
	SKIP_QUESTION,
} from "./actions";
import { GameReducer } from "./game-reducer";
import { Action, GameState } from "../App.types";
import { QuestionsData } from "./game-reducer.test-data";

it("should set the questions in game state", () => {
	const initialState: GameState = {
		questions: [],
		currentQuestion: 0,
		score: 0,
		optionClicked: false,
		status: "RUNNING",
	};

	const action: Action = {
		type: SET_QUESTIONS,
		payload: {
			questions: QuestionsData,
		},
	};

	const expectedState: GameState = {
		questions: QuestionsData,
		currentQuestion: 0,
		score: 0,
		optionClicked: false,
		status: "RUNNING",
	};

	const state = GameReducer(initialState, action);
	expect(state).toMatchObject(expectedState);
});

it("should set the game status to RUNNING", () => {
	const initialState: GameState = {
		questions: [],
		currentQuestion: 0,
		score: 0,
		optionClicked: false,
		status: "NOT_STARTED",
	};

	const action: Action = {
		type: SET_GAME_STATUS,
		payload: {
			status: "RUNNING",
		},
	};

	const expectedState: GameState = {
		questions: [],
		currentQuestion: 0,
		score: 0,
		optionClicked: false,
		status: "RUNNING",
	};

	const state = GameReducer(initialState, action);
	expect(state).toMatchObject(expectedState);
});

it("should set the score in game state", () => {
	const initialState: GameState = {
		questions: [],
		currentQuestion: 0,
		score: 0,
		optionClicked: false,
		status: "RUNNING",
	};

	const action: Action = {
		type: SET_SCORE,
		payload: {
			score: 5,
		},
	};

	const expectedState: GameState = {
		questions: [],
		currentQuestion: 0,
		score: 5,
		optionClicked: false,
		status: "RUNNING",
	};

	const state = GameReducer(initialState, action);
	expect(state).toMatchObject(expectedState);
});

it("should increment the current question in game state", () => {
	const initialState: GameState = {
		questions: [],
		currentQuestion: 0,
		score: 0,
		optionClicked: false,
		status: "RUNNING",
	};

	const action: Action = {
		type: NEXT_QUESTION,
	};

	const expectedState: GameState = {
		questions: [],
		currentQuestion: 1,
		score: 0,
		optionClicked: false,
		status: "RUNNING",
	};

	const state = GameReducer(initialState, action);
	expect(state).toMatchObject(expectedState);
});

it("should skip the current question in game state", () => {
	const initialState: GameState = {
		questions: QuestionsData,
		currentQuestion: 0,
		score: 0,
		optionClicked: false,
		status: "RUNNING",
	};

	const action: Action = {
		type: SKIP_QUESTION,
	};

	QuestionsData[initialState.currentQuestion].skipped = true;
	const expectedState: GameState = {
		questions: QuestionsData,
		currentQuestion: 1,
		score: 0,
		optionClicked: false,
		status: "RUNNING",
	};

	const state = GameReducer(initialState, action);
	expect(state).toMatchObject(expectedState);
});

it("should set the selected option of oc current question in game state", () => {
	const initialState: GameState = {
		questions: QuestionsData,
		currentQuestion: 0,
		score: 0,
		optionClicked: false,
		status: "RUNNING",
	};

	const action: Action = {
		type: SET_SELECTED_OPTION,
		payload: { option: 1 },
	};

	QuestionsData[initialState.currentQuestion].selectedOption =
		action.payload.option;
	const expectedState: GameState = {
		questions: QuestionsData,
		currentQuestion: 0,
		score: 0,
		optionClicked: false,
		status: "RUNNING",
	};

	const state = GameReducer(initialState, action);
	expect(state).toMatchObject(expectedState);
});
