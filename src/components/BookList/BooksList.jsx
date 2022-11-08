import React, { useEffect, useContext } from 'react';

import { AppProviderContext } from '../../context/appProviderContext';
import Book from '../Book/Book';

import "./BookList.css"

const BooksList = () => {
    const { state } = useContext(AppProviderContext);

    return (
        <div className="listContainer">
            {state.books.map((book) => (<Book key={book.id} {...book} />))}
        </div>
    )
}

export default BooksList
