import { useDispatch, useSelector } from "react-redux";
import { returnBook } from "../slices/issueslice";

const IssuedBooks = () => {
  const dispatch = useDispatch();

  const issues = useSelector(
    (state) => state.issues.issues
  );

  const books = useSelector(
    (state) => state.books.books
  );

  const members = useSelector(
    (state) => state.members.members
  );

  const handleReturn = (id) => {
    const confirmReturn = window.confirm(
      "Are you sure you want to return this book?"
    );

    if (confirmReturn) {
      dispatch(returnBook(id));
    }
  };

  return (
    <div className="container mt-4">

      <h2>Issued Books</h2>

      <table className="table table-bordered mt-3">

        <thead>
          <tr>
            <th>Book</th>
            <th>Member</th>
            <th>Issue Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {issues
            .filter((issue) => !issue.returnDate)
            .map((issue) => {

              const book = books.find(
                (book) =>
                  book.id === Number(issue.bookId)
              );

              const member = members.find(
                (member) =>
                  member.id === Number(issue.memberId)
              );

              return (
                <tr key={issue.id}>

                  <td>
                    {book?.title || "Unknown Book"}
                  </td>

                  <td>
                    {member?.name || "Unknown Member"}
                  </td>

                  <td>
                    {issue.issueDate}
                  </td>

                  <td>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() =>
                        handleReturn(issue.id)
                      }
                    >
                      Return
                    </button>
                  </td>

                </tr>
              );
            })}
        </tbody>

      </table>

    </div>
  );
};

export default IssuedBooks;