import { bookFactory } from "./mapPrice"
const { v4: uuidv4 } = require('uuid');

export const formatNewBook = ({ name, isbn, basePrice }) => {
    return bookFactory({
        id: uuidv4(), isRented: false, name, isbn, rentDetails: { basePrice },
    })
}