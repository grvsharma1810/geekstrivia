export type Question = {
	category: string;
	type: string;
	difficulty: string;
	question: string;
	options: Option[];
	skipped: boolean;
	selectedOption: null | number;
};

export type Option = {
	value: string;
	isCorrect: boolean;
};

export type QuestionProp = {
	question: Question;
	score?: number;
	status: "NOT_STARTED" | "RUNNING" | "COMPLETED";
};
