import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  backgroundColor: string;
  textColor: string;
}

const initialState: ThemeState = {
  backgroundColor: "#ffffff",
  textColor: "#000000",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload;
    },
    setTextColor: (state, action) => {
      state.textColor = action.payload;
    },
  },
});

export const { setBackgroundColor, setTextColor } = themeSlice.actions;
export default themeSlice.reducer;
