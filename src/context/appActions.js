import * as actionTypes from "./actionTypes";
import { books as mockBooks } from "../__mocks__/books";
import { formatNewBook } from "../helpers/addNewBook";
import { bookFactory } from "../helpers/mapPrice";
import { getNoBooks } from "../helpers/getNoBooks"
import { rentBook, returnBook } from "../helpers/manageRent";

export const appActions = (dispatch, books) => {
    // console.log("0", books, new Date().toTimeString())
    return {
        getBooks: () => {
            dispatch({
                type: actionTypes.GET_BOOKS,
                payload: mockBooks.map((book) => {
                    return bookFactory(book)
                })
            })
        },
        addBook: (book) => {
            dispatch({
                type: actionTypes.ADD_BOOK,
                payload: formatNewBook(book),
            })
        },
        getNoBooks: (searchFields) => {
            return getNoBooks(books, searchFields)
        },
        rentBook: (book) => {
            dispatch({
                type: actionTypes.RENT_BOOK,
                payload: rentBook({ books, ...book }),
            })
        },
        returnBook: (book) => {
            dispatch({
                type: actionTypes.RETURN_BOOK,
                payload: returnBook({ books, ...book })
            })
        }
    };
};