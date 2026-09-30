import { useState } from "react";
import { addBook } from "../../slices/bookslice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const BookForm = () => {
   
  const dispatch = useDispatch();
  const nav = useNavigate();  
  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    quantity: ""
  });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const newbook = {
    id: Date.now(),
    title: book.title,
    author: book.author,
    category: book.category,
    quantity: Number(book.quantity)
  };

  console.log("Adding book:", newbook);

  dispatch(addBook(newbook));

  nav("/books");
};

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="title"
        placeholder="Book Title"
        value={book.title}
        onChange={handleChange}
      />

      <input
        type="text"
        name="author"
        placeholder="Author"
        value={book.author}
        onChange={handleChange}
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={book.category}
        onChange={handleChange}
      />

      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={book.quantity}
        onChange={handleChange}
      />

      <button type="submit">
        Add Book
      </button>

    </form>
  );
};

export default BookForm;

