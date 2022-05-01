import { Link } from "react-router-dom";
const BookForm = ({ book, handleSubmit, handleChange, cancelPath }) => {
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="book-form">
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter Book Title"
          defaultValue={book.title}
          name="title"
          onChange={(e) => handleChange(e)}
          className="book-title"
        />
        <input
          type="text"
          placeholder="Enter Book Author"
          defaultValue={book.author}
          name="author"
          onChange={(e) => handleChange(e)}
          className="book"
        />
        <input
          type="text"
          placeholder="Enter Book Publish Year"
          defaultValue={book.year}
          name="year"
          onChange={(e) => handleChange(e)}
          className="book"
        />
        <input
          type="text"
          placeholder="Enter Book Genres"
          defaultValue={book.genres}
          name="genres"
          onChange={(e) => handleChange(e)}
          className="book"
        />
        <input
          type="text"
          placeholder="Enter Book ISBN Number"
          defaultValue={book.ISBN}
          name="ISBN"
          onChange={(e) => handleChange(e)}
          className="book"
        />
        <input
          type="text"
          placeholder="Enter Book Image Link"
          defaultValue={book.imageLink}
          name="imageLink"
          onChange={(e) => handleChange(e)}
          className="book"
        />
        <div>
          <button type="submit">Submit</button>

          <Link to={cancelPath}>
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
