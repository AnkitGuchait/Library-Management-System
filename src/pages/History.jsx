import { useDispatch, useSelector } from "react-redux";
import { deleteIssue } from "../slices/issueslice";

const History = () => {
  const dispatch = useDispatch();

  const issues = useSelector((state) => state.issues.issues);
  const books = useSelector((state) => state.books.books);
  const members = useSelector((state) => state.members.members);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this history?"
    );

    if (confirmDelete) {
      dispatch(deleteIssue(id));
    }
  };

  return (
    <div className="container">
      <h2 className="mb-4">Issue History</h2>

      {issues.length === 0 ? (
        <p>No issue history found.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Book</th>
              <th>Member</th>
              <th>Issue Date</th>
              <th>Return Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {issues.map((issue) => {
              const book = books.find(
                (book) => book.id === Number(issue.bookId)
              );

              const member = members.find(
                (member) => member.id === Number(issue.memberId)
              );

              return (
                <tr key={issue.id}>
                  <td>{book?.title || "Unknown Book"}</td>

                  <td>{member?.name || "Unknown Member"}</td>

                  <td>{issue.issueDate}</td>

                  <td>
                    {issue.returnDate || "Not Returned"}
                  </td>

                  <td>
                    {issue.returnDate ? (
                      <span className="badge bg-success">
                        Returned
                      </span>
                    ) : (
                      <span className="badge bg-warning text-dark">
                        Issued
                      </span>
                    )}
                  </td>

                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(issue.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default History;