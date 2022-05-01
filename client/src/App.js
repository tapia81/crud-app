import "./App.css";
import Home from "./pages/Home";
import BookCreate from "./pages/BookCreate";
import Book from "./pages/Book";
import BookEdit from "./pages/BookEdit";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-book" element={<BookCreate />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/:id/edit" element={<BookEdit />} />
      </Routes>
    </div>
  );
}

export default App;
