import React, { createContext, useReducer, useEffect } from "react";
import { appReducers } from "./appReducers";
import { appActions } from "./appActions";

export const AppProviderContext = createContext();

const initialState = {
    books: []
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducers, initialState);
    // const getBooks = () => state.books;
    const actions = appActions(dispatch, state.books);

    useEffect(() => {
        actions.getBooks();
    }, [])

    return (
        <AppProviderContext.Provider value={{ state, dispatch, actions }}>
            {children}
        </AppProviderContext.Provider>
    );
};

export default AppProvider;