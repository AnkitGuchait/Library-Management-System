import { useSelector } from "react-redux";
import { useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();

  const books = useSelector((state) => state.books.books);

  const book = books.find(
    (book) => book.id === Number(id)
  );

  if (!book) {
    return <h2>Book not found</h2>;
  }

  return (
    <div>
      <h2>Book Details</h2>

      <p>ID: {book.id}</p>
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <p>Quantity: {book.quantity}</p>
    </div>
  );
};

export default BookDetails;
