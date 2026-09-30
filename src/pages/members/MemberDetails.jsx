import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

const MemberDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const member = useSelector((state) =>
    state.members.members.find(
      (member) => member.id === Number(id)
    )
  );

  if (!member) {
    return (
      <div className="container mt-4">
        <h3>Member not found</h3>
      </div>
    );
  }

  return (
    <div className="container mt-4">

      <h2>Member Details</h2>

      <div className="card mt-3">
        <div className="card-body">

          <p>
            <strong>ID:</strong> {member.id}
          </p>

          <p>
            <strong>Name:</strong> {member.name}
          </p>

          <p>
            <strong>Email:</strong> {member.email}
          </p>

          <p>
            <strong>Phone:</strong> {member.phone}
          </p>

          <p>
            <strong>Address:</strong> {member.address}
          </p>

          <button
            className="btn btn-secondary"
            onClick={() => navigate("/members")}
          >
            Back
          </button>

        </div>
      </div>

    </div>
  );
};

export default MemberDetails;
