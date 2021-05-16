import React from "react";
import { Questions } from "./components/Playzone/Playzone.types";

export type GameState = {
	questions: Questions;
	currentQuestion: number;
	score: number;
};

export type Action = {
	type: string;
	payload: any;
};

export type GameContext = {
	gameState: GameState;
	gameDispatch: React.Dispatch<any>;
};
