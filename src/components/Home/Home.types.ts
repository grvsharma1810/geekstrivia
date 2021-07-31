export type QuestionSet = {
    _id : string,
    name: string
}

export type QuestionSets = {
    questionSets : QuestionSet[]
}

export type ServerError = { 
    errorMessage: string,    
}

