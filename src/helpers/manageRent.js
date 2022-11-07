
import { bookFactory } from "./mapPrice"

export const manageBook = ({ books, isbn, person, renting = true }) => {
    if (renting) {
        const bookToRent = books.findIndex((book) => book.isbn === isbn && !book.isRented)
        if (bookToRent > 0) {
            books[bookToRent].rentDetails.rentedBy = person;
            books[bookToRent].rentDetails.rentDate = new Date(Date.now());
            books[bookToRent].isRented = true;
            books[bookToRent] = bookFactory(books[bookToRent])

        }
        return books
    }
    const bookToRent = books.findIndex((book) => book.isbn === isbn && book.rentDetails.rentedBy === person)
    delete books[bookToRent].rentDetails.rentedBy;
    delete books[bookToRent].rentDetails.rentDate;
    delete books[bookToRent].rentDetails.totalPrice;
    books[bookToRent].isRented = false;
    return books
}
