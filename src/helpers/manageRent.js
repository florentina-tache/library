import { bookFactory } from "./mapPrice";

export const rentBook = ({ books, isbn, person, name }) => {
    const bookToRent = isbn
        ? books.findIndex((book) => book.isbn === isbn && !book.isRented)
        : books.findIndex((book) => book.name === name && !book.isRented);
    if (bookToRent > 0) {
        books[bookToRent].rentDetails.rentedBy = person;
        books[bookToRent].rentDetails.rentDate = new Date(Date.now());
        books[bookToRent].isRented = true;
        books[bookToRent] = bookFactory(books[bookToRent]);
    }
    return books;
};

export const returnBook = ({ books, isbn, person, name }) => {
    const bookToRent = isbn
        ? books.findIndex(
            (book) => book.isbn === isbn && book.rentDetails.rentedBy === person
        )
        : books.findIndex(
            (book) => book.name === name && book.rentDetails.rentedBy === person
        );
    delete books[bookToRent].rentDetails.rentedBy;
    delete books[bookToRent].rentDetails.rentDate;
    delete books[bookToRent].rentDetails.totalPrice;
    books[bookToRent].isRented = false;
    return books;
};
