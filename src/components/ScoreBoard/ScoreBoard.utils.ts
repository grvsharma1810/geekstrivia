import { Questions } from "../Playzone/Playzone.types";

export const getSkippedQuestionsCount = (questions: Questions): number => {
	return questions.filter((question) => question.skipped === true).length;
};

export const getCorrectAnswersCount = (questions: Questions): number => {
	return questions.filter(
		(question) =>
			question.selectedOption ===
			question.options.findIndex((option) => option.isCorrect === true)
	).length;
};
