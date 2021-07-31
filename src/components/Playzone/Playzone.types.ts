import { Option, Question } from "../Question/Question.types";

export type APIQuestions = {
	questions: {
		_id: string,
		questionSetId: string,
		question: string;
		options: Option[]
	}[];
};

export type Questions = Question[];

export type ServerError = {
	errorMessage: string;
};
