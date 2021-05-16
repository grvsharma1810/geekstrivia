import axios, { AxiosError } from "axios";
import { APIQuestions, Questions, ServerError } from "./Playzone.types";
import {Option} from "../Question/Question.types"

export const getQuestions = async (
	categoryId: number | undefined | null,
	difficulty: string | undefined | null
): Promise<Questions | ServerError> => {
	let url = `https://opentdb.com/api.php?amount=10
	${categoryId !== 1 ? `&category=${categoryId}` : ""}
	${difficulty !== "any" ? `&difficulty=${difficulty}` : ""}
	&type=multiple`;
	try {
		const response = await axios.get<APIQuestions>(url);
		console.log(response);
		return response.data.results.map((item) => {
			let options = [
				...item.incorrect_answers.map(
					(answer) =>
						({
							value: answer,
							isCorrect: false,
						} as Option)
				),
			]
			options.splice(Math.floor(Math.random() * 3), 0, {
				value: item.correct_answer,
				isCorrect: true,
			})

			return {
				category: item.category,
				type: item.type,
				difficulty: item.difficulty,
				question: item.question,
				options: options
			};
		}) as Questions;
		
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const serverError = error as AxiosError<ServerError>;
			if (serverError && serverError.response) {
				return serverError.response.data;
			}
		}
		return { errorMessage: "Something Went Wrong" };
	}
};
