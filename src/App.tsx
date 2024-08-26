import "./App.css";
import ThemeSettings from "./components/themeSettings";
import { useSelector } from "react-redux";
import { rootState } from "./states/store";
import BookSearch from "./components/BookSearch";
import AuthorSearch from "./components/AuthorSearch";
import BooksList from "./components/BooksList";

function App() {
  const { backgroundColor, textColor } = useSelector(
    (state: rootState) => state.themeReducer
  );
  return (
    <div
      style={{
        backgroundColor,
        color: textColor,
        width: "100%",
        height: "100%",
      }}
    >
      <h1>Google Books Search</h1>
      <ThemeSettings />
      <BookSearch />
      <AuthorSearch />
      <BooksList />
    </div>
  );
}

export default App;
