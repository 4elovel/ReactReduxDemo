import React from "react";
import { useSelector } from "react-redux";
import { rootState } from "../states/store";
import { Book } from "../states/books/bookTypes";

const BooksList: React.FC = () => {
  const books: Book[] = useSelector(
    (state: rootState) => state.bookReducer.books
  );
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>{book.volumeInfo.title}</li>
      ))}
    </ul>
  );
};
export default BooksList;
