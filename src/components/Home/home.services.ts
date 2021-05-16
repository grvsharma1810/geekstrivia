import axios, { AxiosError } from "axios"
import { Categories, ServerError } from "./home.types"

export const getCategories = async (): Promise<Categories|ServerError> => {
    try {
        const response = await axios.get<Categories>("https://opentdb.com/api_category.php")        
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