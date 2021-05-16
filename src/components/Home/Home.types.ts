export type Category = {
    id : number,
    name : string
}

export type Categories = {
    trivia_categories : Category[],
}

export type ServerError = { 
    errorMessage: string,    
}

