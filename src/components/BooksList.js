import React, { useEffect, useContext } from 'react';

import { AppProviderContext } from '../context/appProviderContext';

const BooksList = () => {
    const { state, actions } = useContext(AppProviderContext);

    const addBook = () => {
        actions.addBook({ name: "Understanding ECMAScript 6", isbn: "9781593277574", basePrice: 3.99 })
    }

    const getBook = () => {
        console.log(actions.getNoBooks({ name: "Speaking JavaScript" }))
    }

    const rentBook = () => {
        actions.rentBook({ name: "Practical Modern JavaScript", person: "Florentina Tache" })
    }

    const returnBook = () => {
        actions.returnBook({ name: "Practical Modern JavaScript", person: "Florentina Tache" })
    }

    return (
        <>
            <button onClick={rentBook}>click</button>
            <button onClick={returnBook}>remove</button>
        </>
    )
}

export default BooksList
