import './App.css';

import { books } from './__mocks__/books';
import { bookFactory } from './helpers/mapPrice';
import { addNewBook } from './helpers/addNewBook';
import { getNoBooks } from './helpers/getNoBooks';
import { manageBook } from './helpers/manageRent';

const App = () => {
  const booksDetails = books.map((book) => {
    return bookFactory(book)
  })

  // console.log(booksDetails)

  // addNewBook({ books: booksDetails, name: "Understanding ECMAScript 6", isbn: "9781593277574", basePrice: 3.99 })

  // console.log(getNoBooks(booksDetails, "9781449365035"))
  manageBook({ books: booksDetails, isbn: "9781491943533", person: "Florentina Tache" })

  manageBook({ books: booksDetails, isbn: "9781491943533", person: "Florentina Tache", renting: false })


  console.log(booksDetails);

  return (
    <div className="App">

    </div>
  );
}

export default App;
