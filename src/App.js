import './App.css';

// import { books } from './__mocks__/books';
// import { bookFactory } from './helpers/mapPrice';
// import { addNewBook } from './helpers/addNewBook';
// import { getNoBooks } from './helpers/getNoBooks';
// import { manageBook } from './helpers/manageRent';

import AppProvider from './context/appProviderContext';
import BooksList from './components/BooksList';

const App = () => {
  return (
    <AppProvider>
      <div className="App">
        <BooksList />
      </div>
    </AppProvider>
  );
}

export default App;
