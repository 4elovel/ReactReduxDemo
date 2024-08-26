import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Book } from "./bookTypes";

const API_KEY = "AIzaSyCkJPLpck6CUoiANvUGXibjgQAqfx0e_EE";

interface BookState {
  books: Book[];
  status: "idle" | "loading" | "failed";
}

const initialState: BookState = {
  books: [],
  status: "idle",
};

export const fetchBooksByTitle = createAsyncThunk(
  "books/fetchBooksByTitle",
  async (title: string) => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&key=${API_KEY}`
    );
    return response.data.items;
  }
);

export const fetchBooksByAuthor = createAsyncThunk(
  "books/fetchBooksByAuthor",
  async (author: string) => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}&key=${API_KEY}`
    );
    return response.data.items;
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksByTitle.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooksByTitle.fulfilled, (state, action) => {
        state.status = "idle";
        state.books = action.payload;
        console.log(state);
      })
      .addCase(fetchBooksByTitle.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchBooksByAuthor.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooksByAuthor.fulfilled, (state, action) => {
        state.status = "idle";
        state.books = action.payload;
        console.log(state);
      })
      .addCase(fetchBooksByAuthor.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default bookSlice.reducer;
