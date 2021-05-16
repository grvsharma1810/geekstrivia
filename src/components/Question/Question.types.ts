export type Question = {
	category: string;
	type: string;
	difficulty: string;
	question: string;
	options: Option[];
};

export type Option = {
	value: string;
	isCorrect: boolean;
};

export type QuestionProp = {
    question: Question,
	score: number
}