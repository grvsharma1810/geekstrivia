import axios, { AxiosError } from "axios";
import { APIQuestions, Questions, ServerError } from "./Playzone.types";
import { flattenQuestionsFromAPI } from "./Playzone.utils";

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
		return flattenQuestionsFromAPI(response.data);		
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