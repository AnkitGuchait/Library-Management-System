import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addMember } from "../../slices/memberslice";

const MemberForm = () => {

  const dispatch = useDispatch();
  const nav = useNavigate();
  const [member, setMember] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleChange = (e) => {
    setMember({
      ...member,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newmember = {
      id : Date.now(),
      name : member.name,
      email : member.email,
      phone : member.phone,
      address : member.address
    }
 
    dispatch(addMember(newmember));
    nav('/members')
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="name"
        placeholder="Member Name"
        value={member.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={member.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={member.phone}
        onChange={handleChange}
      />

      <input
        type="text"
        name="address"
        placeholder="Address"
        value={member.address}
        onChange={handleChange}
      />

      <button type="submit">
        Add Member
      </button>

    </form>
  );
};

export default MemberForm;

