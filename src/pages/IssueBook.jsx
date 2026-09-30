
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { issueBook } from "../slices/issueslice";

const IssueBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const books = useSelector((state) => state.books.books);
  const members = useSelector((state) => state.members.members);

  // Get all issued books
  const issues = useSelector((state) => state.issues.issues);

  const [bookId, setBookId] = useState("");
  const [memberId, setMemberId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedBook = books.find(
      (book) => book.id === Number(bookId)
    );

    const selectedMember = members.find(
      (member) => member.id === Number(memberId)
    );

    if (!selectedBook || !selectedMember) {
      alert("Please select a book and member");
      return;
    }

    // Count how many copies of this book are currently issued
    const issuedCount = issues.filter(
      (issue) =>
        issue.bookId === selectedBook.id &&
        issue.status === "issued"
    ).length;

    // Check book quantity
    if (issuedCount >= selectedBook.quantity) {
      alert("No copies available for this book");
      return;
    }

    const newIssue = {
      id: Date.now(),
      bookId: selectedBook.id,
      bookTitle: selectedBook.title,
      memberId: selectedMember.id,
      memberName: selectedMember.name,
      issueDate: new Date().toLocaleDateString(),

      // Important
      status: "issued"
    };

    dispatch(issueBook(newIssue));

    navigate("/issued-books");
  };

  return (
    <div>
      <h2>Issue Book</h2>

      <form onSubmit={handleSubmit}>
        <label>Select Book</label>

        <br />

        <select
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
        >
          <option value="">Select Book</option>

          {books.map((book) => (
            <option key={book.id} value={book.id}>
              {book.title} - Available:{" "}
              {book.quantity -
                issues.filter(
                  (issue) =>
                    issue.bookId === book.id &&
                    issue.status === "issued"
                ).length}
            </option>
          ))}
        </select>

        <br />
        <br />

        <label>Select Member</label>

        <br />

        <select
          value={memberId}
          onChange={(e) => setMemberId(e.target.value)}
        >
          <option value="">Select Member</option>

          {members.map((member) => (
            <option key={member.id} value={member.id}>
              {member.name}
            </option>
          ))}
        </select>

        <br />
        <br />

        <button type="submit">
          Issue Book
        </button>
      </form>
    </div>
  );
};

export default IssueBook;

