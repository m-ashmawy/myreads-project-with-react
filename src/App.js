import "./App.css";
import { useState, useEffect } from "react";
import MyReads from "./components/MyReads";
import SearchPage from "./components/SearchPage";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [myBooks, setMyBooks] = useState([]);
  useEffect(() => {
    let search = true;
    const getBooks = async () => {
      if (search) {
        const res = await BooksAPI.getAll();
        setMyBooks(myBooks.concat(res));
      }
    };
    getBooks();
    return () => {
      search = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    book.shelf = shelf;
    setMyBooks(myBooks.filter((ele) => ele.id !== book.id).concat(book));
  };

  return (
    <Routes>
      <Route
        exact
        path={"/"}
        element={<MyReads books={myBooks} changeShelf={changeShelf} />}
      />

      <Route
        exact
        path={"/search"}
        element={<SearchPage myBooks={myBooks} changeShelf={changeShelf} />}
      />
    </Routes>
  );
}

export default App;
