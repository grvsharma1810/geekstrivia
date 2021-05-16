import { Question } from "../Question/Question.types";

export type APIQuestions = {
	results: {
		category: string;
		type: string;
		difficulty: string;
		question: string;
		correct_answer: string;
		incorrect_answers: string[];
	}[];
};

export type Questions = Question[];

export type ServerError = {
	errorMessage: string;
};
