import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./settings/themeSlice";
import bookReducer from "./books/bookSlice";

export const store = configureStore({
  reducer: { themeReducer, bookReducer },
});

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
