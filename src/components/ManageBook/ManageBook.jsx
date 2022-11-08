import React, { useState, useReducer, useContext } from "react";

import { AppProviderContext } from "../../context/appProviderContext";

import "./ManageBook.css";

const initialState = {
    name: "",
    isbn: "",
    basePrice: "",
    person: "",
};

const formReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'setName':
            return { ...state, name: payload };
        case 'setIsbn':
            return { ...state, isbn: payload };
        case 'setBasePrice':
            return { ...state, basePrice: payload };
        case 'setPerson':
            return { ...state, person: payload };
        case 'clear':
            return { ...initialState };
        default:
            throw new Error();
    }
}

const ManageBook = ({ isRented }) => {
    const { actions } = useContext(AppProviderContext);
    const [formState, dispatch] = useReducer(formReducer, initialState);
    const [error, setError] = useState()

    const addBook = () => {
        if (formState.name && formState.isbn && formState.basePrice) {
            actions.addBook({
                name: formState.name,
                isbn: formState.isbn,
                basePrice: formState.basePrice,
            });
            dispatch({ type: "clear" });
            setError(null);
        } else {
            setError("Must add book name, ISBN and base price!")
        }
    };

    const getBook = () => {
        if (formState.name || formState.isbn) {
            alert(actions.getNoBooks({ name: formState.name, isbn: formState.isbn }));
            dispatch({ type: "clear" })
            setError(null);
        } else {
            setError("Must add book name or ISBN!")
        }
    };

    const rentBook = () => {
        if ((formState.name || formState.isbn) && formState.person) {
            actions.rentBook({
                name: formState.name,
                isbn: formState.isbn,
                person: formState.person,
            });
            dispatch({ type: "clear" })
            setError(null);
        } else {
            setError("Must add book name or ISBN and a person!");
        }
    };

    const returnBook = () => {
        if ((formState.name || formState.isbn) && formState.person) {
            actions.returnBook({
                name: formState.name,
                isbn: formState.isbn,
                person: formState.person,
            });
            dispatch({ type: "clear" });
            setError(null);
        } else {
            setError("Must add book name or ISBN and a person!");
        }
    };
    return (
        <div className="manageBooksContainer">
            {error && (<div className="errorText">{error}</div>)}
            <div className="elementsContainer">
                <div className="inputsContainer">
                    <label className="inputLabel">
                        Enter book name:
                        <input
                            type="text"
                            value={formState.name}
                            className="input"
                            onChange={(e) => dispatch({
                                type: 'setName',
                                payload: e.target.value
                            })}
                        />
                    </label>
                    <label className="inputLabel">
                        Enter ISBN:
                        <input
                            type="text"
                            value={formState.isbn}
                            className="input"
                            onChange={(e) => dispatch({
                                type: 'setIsbn',
                                payload: e.target.value
                            })}
                        />
                    </label>
                    <label className="inputLabel">
                        Enter base price:
                        <input
                            type="text"
                            value={formState.basePrice}
                            className="input"
                            onChange={(e) => dispatch({
                                type: 'setBasePrice',
                                payload: e.target.value
                            })}
                        />
                    </label>
                    <label className="inputLabel">
                        Enter person name:
                        <input
                            type="text"
                            value={formState.person}
                            className="input"
                            onChange={(e) => dispatch({
                                type: 'setPerson',
                                payload: e.target.value
                            })}
                        />
                    </label>
                </div>
                <div className="buttonsContainer">
                    <button className="button" onClick={addBook}>Add a book</button>
                    <button className="button" onClick={getBook}>Get number of books</button>
                    <button className="button" onClick={rentBook}>Rent a book</button>
                    <button className="button" onClick={returnBook}>Renturn a book</button>
                </div>
            </div>
        </div>
    );
};

export default ManageBook;
