import * as actionTypes from "./actionTypes";

export const appReducers = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.GET_BOOKS:
            return { books: payload };
        case actionTypes.ADD_BOOK:
            return { books: [...state.books, payload] };
        case actionTypes.RENT_BOOK:
            return { books: payload };
        case actionTypes.RETURN_BOOK:
            return { books: payload };
        default:
            return state;
    }
};