import { createAction, props } from "@ngrx/store";
import { Books } from "./books";

export const getBooks = createAction(
    '[Books] Get books'
)
export const getBooksSuccess = createAction(
    '[Books] Get books success'
)
export const addBooks = createAction(
    '[Books] Add books', 
    (books: Books) => books
    // props<{books: Books}>()
)
export const addBooksSuccess = createAction(
    '[Books] Add books success'
)