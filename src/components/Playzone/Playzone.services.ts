import axios, { AxiosError } from "axios";
import { APIQuestions, Questions, ServerError } from "./Playzone.types";
import { flattenQuestionsFromAPI } from "./Playzone.utils";

export const getQuestions = async (
	questionSetId: string,	
): Promise<Questions | ServerError> => {
	let url = `https://geekstrivia-backend.herokuapp.com/question-sets/${questionSetId}/questions`;
	try {
		const response = await axios.get<APIQuestions>(url);
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