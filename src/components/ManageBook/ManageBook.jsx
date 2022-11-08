import React, { useContext } from 'react'

import { AppProviderContext } from '../../context/appProviderContext';

import "./ManageBook.css"

const ManageBook = ({ isRented }) => {
    const { actions } = useContext(AppProviderContext);

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
        <div className="manageBooksContainer">
            <div className="buttonsContainer">
                <button className="button">
                    Add a book
                </button>
                <button className="button">
                    Get number of books
                </button>
                <button className="button">
                    Rent a book
                </button>
                <button className="button">
                    Renturn a book
                </button>
            </div>

        </div>
    )
}

export default ManageBook
