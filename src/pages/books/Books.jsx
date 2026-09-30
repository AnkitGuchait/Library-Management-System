import { Link } from "react-router";
import { useSelector } from "react-redux";
import BookTable from "../../components/books/BookTable";

const Books = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <div>
      <h2>Books</h2>

      <p>Total Books: {books.length}</p>

      <Link to="/books/add">
        <button>Add Book</button>
      </Link>

      <br />
      <br />

      <BookTable />
    </div>
  );
};

export default Books;

