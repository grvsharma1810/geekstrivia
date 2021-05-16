import {
	createContext,
	useContext,	
	useReducer,	
} from "react";
import { GameReducer } from "../reducers/game-reducer";

const GameContext = createContext({});

export const GameProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(GameReducer, {
		questions: [],
		currentQuestion: 0,
		score: 0,
	});

	return (
		<GameContext.Provider value={{ gameState:state, gameDispatch:dispatch }}>
			{children}
		</GameContext.Provider>
	);
};

export const useGame = () => {
	return useContext(GameContext);
};
