import { createContext, useContext, useReducer } from "react";
import { GameContext } from "../App.types";
import { GameReducer } from "../reducers/game-reducer";

const Gamecontext = createContext({});

export const GameProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(GameReducer, {
		questions: [],
		currentQuestion: 0,
		score: 0,
		optionClicked: false,
		status: "NOT_STARTED",
	});

	return (
		<Gamecontext.Provider
			value={{ gameState: state, gameDispatch: dispatch }}
		>
			{children}
		</Gamecontext.Provider>
	);
};

export const useGame = (): GameContext => {
	return useContext(Gamecontext) as GameContext;
};
