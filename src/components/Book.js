import React from "react";

const Book = (props) => {
  let Pic;
  props.book.imageLinks ? (Pic = props.book.imageLinks.thumbnail) : (Pic = "");

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 188,
            backgroundImage: `url("${Pic}")`,
          }}
        />
        <div className="book-shelf-changer">
          <select
            onChange={(e) => props.changeShelf(props.book, e.target.value)}
            value={props.shelf}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.authors}</div>
    </div>
  );
};

export default Book;
