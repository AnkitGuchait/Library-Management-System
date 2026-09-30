import { useSelector } from "react-redux";

const Fines = () => {
  const issues = useSelector((state) => state.issues.issues);
  const books = useSelector((state) => state.books.books);
  const members = useSelector((state) => state.members.members);

  const finePerDay = 10;

  const today = new Date();

  const fineRecords = issues.map((issue) => {
    const book = books.find(
      (book) => book.id === Number(issue.bookId)
    );

    const member = members.find(
      (member) => member.id === Number(issue.memberId)
    );

    const issueDate = new Date(issue.issueDate);

    // Assume book is allowed for 7 days
    const dueDate = new Date(issueDate);
    dueDate.setDate(dueDate.getDate() + 7);

    const returnDate = issue.returnDate
      ? new Date(issue.returnDate)
      : today;

    let overdueDays = Math.floor(
      (returnDate - dueDate) / (1000 * 60 * 60 * 24)
    );

    if (overdueDays < 0) {
      overdueDays = 0;
    }

    const fine = overdueDays * finePerDay;

    return {
      ...issue,
      bookName: book?.title || "Unknown Book",
      memberName: member?.name || "Unknown Member",
      dueDate,
      overdueDays,
      fine
    };
  });

  const totalFine = fineRecords.reduce(
    (total, record) => total + record.fine,
    0
  );

  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Fine Management</h2>

        <div className="alert alert-danger mb-0">
          <strong>Total Fine: ₹{totalFine}</strong>
        </div>
      </div>

      <div className="card shadow-sm">

        <div className="card-body">

          <table className="table table-bordered table-hover">

            <thead className="table-dark">
              <tr>
                <th>Book</th>
                <th>Member</th>
                <th>Issue Date</th>
                <th>Due Date</th>
                <th>Overdue Days</th>
                <th>Fine</th>
              </tr>
            </thead>

            <tbody>

              {fineRecords.map((record) => (
                <tr key={record.id}>

                  <td>{record.bookName}</td>

                  <td>{record.memberName}</td>

                  <td>{record.issueDate}</td>

                  <td>
                    {record.dueDate.toLocaleDateString()}
                  </td>

                  <td>
                    {record.overdueDays}
                  </td>

                  <td>
                    <strong className="text-danger">
                      ₹{record.fine}
                    </strong>
                  </td>

                </tr>
              ))}

              {fineRecords.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center">
                    No fine records found
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Fines;