import { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Book() {
  const [book, setBook] = useState([]);
  const [genre, setGenre] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`http://localhost:3002/api/books/${id}`);
        const result = response.data.book;
        const bookGenres = response.data.book.genres;
        setBook(result);
        setGenre(bookGenres);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  const deleteBook = () => {
    axios({
      url: `http://localhost:3002/api/books/${id}`,
      method: "DELETE",
    })
      .then(() => setDeleted(true))
      .catch(console.error);
  };
  useEffect(() => {
    if (deleted) {
      return navigate("/");
    }
  }, [deleted, navigate]);

  return (
    <div className="book-info-container">
      <div className="book-info">
        <p>
          <b>Title:</b> {book.title}
        </p>
        <p>
          <b>Author:</b> {book.author}
        </p>
        <p>
          <b>Publish Year:</b> {book.year}
        </p>
        <p>
          <b>Genres:</b>
        </p>
        {genre.map((genre, key) => {
          return (
            <div key={key}>
              <p>{genre}</p>
            </div>
          );
        })}
        <p>
          <b>ISBN:</b> {book.ISBN}
        </p>
        <img src={book.imageLink} alt="Book Cover" />
      </div>
      <div className="book-links">
        <NavLink to={`/books/${id}/edit`}>
          <button>Edit</button>
        </NavLink>
        <button onClick={() => deleteBook()}>Delete Book</button>

        <NavLink to={"/"}>
          <button>Back to all books</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Book;
