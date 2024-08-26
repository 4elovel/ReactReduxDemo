import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBooksByTitle } from "../states/books/bookSlice";
import { AppDispatch } from "../states/store";

const BookSearch: React.FC = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = () => {
    if (title) {
      dispatch(fetchBooksByTitle(title));
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter book title"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default BookSearch;
