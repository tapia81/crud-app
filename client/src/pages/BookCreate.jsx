import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookForm from "../components/BookForm";
import axios from "axios";

const BookCreate = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    content: "",
  });

  const [createdBook, setCreatedBook] = useState(null);

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };
    const editedBook = Object.assign(book, updatedField);
    setBook(editedBook);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      url: `http://localhost:3002/api/books`,
      method: "POST",
      data: book,
    })
      .then((res) => setCreatedBook(res.data.book))
      .catch(console.error);
  };

  useEffect(() => {
    if (createdBook) {
      return navigate("/");
    }
  }, [createdBook, navigate]);
  return (
    <div>
      <BookForm
        book={book}
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        cancelPath="/"
      />
    </div>
  );
};

export default BookCreate;
