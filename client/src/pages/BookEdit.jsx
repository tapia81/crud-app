import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BookForm from "../components/BookForm";

function BookEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState({
    title: "",
    content: "",
  });
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`http://localhost:3002/api/books/${id}`);
        console.log(response);
        setBook(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };
    const editedItem = Object.assign(book, updatedField);
    setBook(editedItem);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      url: `http://localhost:3002/api/books/${id}`,
      method: "PUT",
      data: book,
    })
      .then(() => setUpdated(true))
      .catch(console.error);
  };

  useEffect(() => {
    if (updated) {
      return navigate(`/books/${id}`);
    }
  });

  return (
    <div>
      <BookForm
        book={book}
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        cancelPath={`/books/${id}`}
      />
    </div>
  );
}

export default BookEdit;
