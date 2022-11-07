import { bookFactory } from "./mapPrice"
const { v4: uuidv4 } = require('uuid');

export const addNewBook = ({ books, name, isbn, basePrice }) => {
    const newBook = {
        id: uuidv4(), isRented: false, name, isbn, rentDetails: { basePrice },
    }
    return books.push(bookFactory(newBook))
}