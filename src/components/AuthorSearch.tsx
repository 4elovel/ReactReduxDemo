import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBooksByAuthor } from "../states/books/bookSlice";
import { AppDispatch } from "../states/store";

const AuthorSearch: React.FC = () => {
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = () => {
    if (author) {
      dispatch(fetchBooksByAuthor(author));
    }
  };

  return (
    <div>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Enter author name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default AuthorSearch;
