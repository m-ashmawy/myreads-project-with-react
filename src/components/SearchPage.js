import React, { useState } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";

const SearchPage = ({ myBooks, changeShelf }) => {
  const [query, setQuery] = useState("");
  const [srchBks, setsrchBks] = useState([]);

  const updateQuery = (query) => {
    if (query.length !== 0) {
      setQuery(query.trim());
      BooksAPI.search(query, 12).then((sBooks) => {
        setsrchBks(sBooks.error ? [] : sBooks);
      });
    } else {
      setsrchBks([]);
    }
  };

  let checkedBks = srchBks.map((srchBook) => {
    const sameBook = myBooks.find((book) => {
      return book.id === srchBook.id;
    });
    srchBook.shelf = sameBook ? sameBook.shelf : "none";

    return srchBook;
  });

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(event) => {
              updateQuery(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {checkedBks.map((book, index) => {
            return (
              <Book
                key={index}
                book={book}
                changeShelf={changeShelf}
                shelf={book.shelf}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
