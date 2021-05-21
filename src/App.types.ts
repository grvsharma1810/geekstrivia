import React from "react";
import { Questions } from "./components/Playzone/Playzone.types";
import {
	SET_QUESTIONS,
	SET_OPTION_CLICKED,
	SET_SCORE,
	NEXT_QUESTION,	
	SKIP_QUESTION,		
	SET_SELECTED_OPTION
} from "./reducers/game-reducer";

export type GameState = {
	questions: Questions;
	currentQuestion: number;
	score: number;
	optionClicked: boolean;
};

export type Action = 
	| { type: typeof SET_QUESTIONS; payload: { questions: Questions } }
	| { type: typeof SET_OPTION_CLICKED; payload: { optionClicked: boolean } }
	| { type: typeof SET_SCORE; payload: { score: number } }
	| { type: typeof SET_SELECTED_OPTION; payload: { option: number } }
	| { type: typeof NEXT_QUESTION }
	| { type: typeof SKIP_QUESTION }	

export type GameContext = {
	gameState: GameState;
	gameDispatch: React.Dispatch<Action>;
};
