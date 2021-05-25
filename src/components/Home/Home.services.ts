import axios, { AxiosError } from "axios"
import { ServerError, QuestionSets } from "./Home.types"

export const getQuestionSets = async (): Promise<QuestionSets|ServerError> => {
    try {
        // const response = await axios.get<Categories>("https://opentdb.com/api_category.php")
        const response = await axios.get<QuestionSets>("https://geekstrivia-backend.herokuapp.com/question-sets")
        return response.data;
    } catch (error) {    
        if(axios.isAxiosError(error)){            
            const serverError = (error as AxiosError<ServerError>)                        
            if(serverError && serverError.response){
                return serverError.response.data;
            }
        }        
        return {errorMessage:"Something Went Wrong"}
    }
}