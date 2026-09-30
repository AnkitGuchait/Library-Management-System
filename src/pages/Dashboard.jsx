import { useSelector } from "react-redux";
import { Link } from "react-router";

const Dashboard = () => {

  const books = useSelector(
    (state) => state.books.books
  );

  const members = useSelector(
    (state) => state.members.members
  );

  const issues = useSelector(
    (state) => state.issues.issues
  );

  const issuedBooks = issues.filter(
    (issue) => !issue.returnDate
  );

  const returnedBooks = issues.filter(
    (issue) => issue.returnDate
  );

  return (
    <div className="container mt-4">

      <h2 className="mb-4">
        Library Dashboard
      </h2>

      {/* Statistics */}

      <div className="row">

        {/* Total Books */}
        <div className="col-md-3 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">

              <h5>Total Books</h5>

              <h2>
                {books.length}
              </h2>

              <Link
                to="/books"
                className="btn btn-primary btn-sm"
              >
                View Books
              </Link>

            </div>
          </div>
        </div>


        {/* Total Members */}
        <div className="col-md-3 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">

              <h5>Total Members</h5>

              <h2>
                {members.length}
              </h2>

              <Link
                to="/members"
                className="btn btn-primary btn-sm"
              >
                View Members
              </Link>

            </div>
          </div>
        </div>


        {/* Issued Books */}
        <div className="col-md-3 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">

              <h5>Issued Books</h5>

              <h2>
                {issuedBooks.length}
              </h2>

              <Link
                to="/issue-book"
                className="btn btn-primary btn-sm"
              >
                Issue Book
              </Link>

            </div>
          </div>
        </div>


        {/* Returned Books */}
        <div className="col-md-3 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">

              <h5>Returned Books</h5>

              <h2>
                {returnedBooks.length}
              </h2>

              <Link
                to="/history"
                className="btn btn-primary btn-sm"
              >
                View History
              </Link>

              <Link to="/fines" 
                    className="btn btn-danger me-2"
              >
                View Fines
              </Link>

            </div>
          </div>
        </div>

      </div>


      {/* Quick Actions */}

      <div className="card mt-4 shadow-sm">

        <div className="card-body">

          <h4>Quick Actions</h4>

          <div className="mt-3">

            <Link
              to="/books/add"
              className="btn btn-success me-2"
            >
              Add Book
            </Link>

            <Link
              to="/members/add"
              className="btn btn-success me-2"
            >
              Add Member
            </Link>

            <Link
              to="/issue-book"
              className="btn btn-warning me-2"
            >
              Issue Book
            </Link>

            <Link
              to="/history"
              className="btn btn-info"
            >
              History
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;



