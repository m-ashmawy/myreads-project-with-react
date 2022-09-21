import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../App.css";
import Book from "./Book";

const MyReads = (props) => {
  const books = props.books;
  const shelves = [
    { type: "currentlyReading", title: "Currently Reading" },
    { type: "wantToRead", title: "Want to Read" },
    { type: "read", title: "Read" },
  ];
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map((currShelf, i) => (
            <div className="bookshelf" key={i}>
              <h2 className="bookshelf-title">{currShelf.title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books
                    .filter((book) => book.shelf === currShelf.type)
                    .map((book) => (
                      <li key={book.id}>
                        <Book
                          book={book}
                          changeShelf={props.changeShelf}
                          shelf={currShelf.type}
                        />
                      </li>
                    ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search" />
      </div>
    </div>
  );
};
MyReads.propTypes = {
  books: PropTypes.array.isRequired,
};
export default MyReads;
