export type Question = {
	_id: string,
	questionSetId: string,
	question: string;
	options: Option[];
	skipped: boolean;
	selectedOption: null | number;
};

export type Option = {
	_id: string,
	value: string;
	isCorrect: boolean;
};

export type QuestionProp = {
	question: Question;
	score?: number;
	status: "NOT_STARTED" | "RUNNING" | "COMPLETED";
};
