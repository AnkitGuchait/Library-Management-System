import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { deleteBook } from "../../slices/bookslice";

const BookTable = () => {
  
  const dispatch = useDispatch();
  const books = useSelector((state)=>state.books.books);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );

    if (confirmDelete) {
      dispatch(deleteBook(id));
    }
  };

  // const books = [
  //   {
  //     id: 1,
  //     title: "JavaScript",
  //     author: "John",
  //     category: "Programming",
  //     quantity: 5
  //   },
  //   {
  //     id: 2,
  //     title: "React",
  //     author: "David",
  //     category: "Programming",
  //     quantity: 3
  //   }
  // ];

  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.category}</td>
            <td>{book.quantity}</td>
            <td>
              <Link to={`/books/edit/${book.id}`}>
              <button>Edit</button>
              </Link>
              <Link to={`/books/${book.id}`}>
              <button>View</button>
              </Link>

              <Link to="/issue-book">
                  Issue Book
              </Link>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(book.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;

