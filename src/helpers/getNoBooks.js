export const getNoBooks = (books, isbn) => {
    return books.filter((book) => book.isbn === isbn).length
}