import { createReducer, on } from "@ngrx/store";
import { Books } from "./books";
import { addBooks, getBooks } from "./books.action";

export interface BooksState {
    books: ReadonlyArray<Books>;
}

export const initialState: ReadonlyArray<Books> = [];

export const booksReducer = createReducer(
    initialState,
    on(getBooks, (state) => [...mockBooks()]),
    on(addBooks, (state, books)=> [...state, books])
)


function mockBooks(): Books[] {
    let books = [
        {
            "id": 1,
            "title": "Harry Porter",
            "author": "J. K. Rowling",
            "cost": 420
        },
        {
            "title": "Test",
            "author": "test",
            "cost": 30,
            "id": 2
        }
    ]
    return books;
}