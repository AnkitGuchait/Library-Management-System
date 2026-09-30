import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { updateMember } from "../../slices/memberslice";

const EditMember = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const nav = useNavigate();

  const member = useSelector((state) =>
    state.members.members.find(
      (member) => member.id === Number(id)
    )
  );

  const [formData, setFormData] = useState({
    name: member?.name || "",
    email: member?.email || "",
    phone: member?.phone || "",
    address: member?.address || ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateMember({
        id: Number(id),
        ...formData
      })
    );

    nav("/members");
  };

  if (!member) {
    return <h3>Member not found</h3>;
  }

  return (
    <div className="container mt-4">

      <h2>Edit Member</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">
            Member Name
          </label>

          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Email
          </label>

          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Phone
          </label>

          <input
            type="text"
            name="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Address
          </label>

          <input
            type="text"
            name="address"
            className="form-control"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
        >
          Update Member
        </button>

      </form>

    </div>
  );
};

export default EditMember;