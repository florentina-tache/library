export const getNoBooks = (books, { isbn, name }) => {
    return isbn ? books.filter((book) => book.isbn === isbn).length : books.filter((book) => book.name === name).length
}