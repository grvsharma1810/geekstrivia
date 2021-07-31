import { Option } from "./Question.types";

export const getCorrectOptionIndex = (options: Option[]) => {
	return options.findIndex((option) => option.isCorrect === true);
};
