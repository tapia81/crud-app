import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios(`http://localhost:3002/api/books`);
      setBooks(res.data.books);
    } catch (err) {
      console.log(err);
    }
  };

  const booksData = books.map((book) => {
    return (
      <li key={book._id}>
        <h2>{book.title}</h2>
        <NavLink to={`/books/${book._id}`}>
          <img src={book.imageLink} alt="Book Cover" />
        </NavLink>
      </li>
    );
  });

  useEffect(() => {
    fetchData();
  });

  return (
    <div className="books-container">
      <h1>Book List</h1>
      <NavLink to="/create-book">
        <button className="create">Create Book</button>
      </NavLink>
      <ul>
        <div className="books-list">{booksData}</div>
      </ul>
    </div>
  );
};

export default Home;
