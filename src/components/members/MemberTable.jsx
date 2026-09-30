import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { deleteMember } from "../../slices/memberslice";

const MemberTable = () => {
  
  const dispatch = useDispatch();
  const members = useSelector((state)=>state.members.members);

  const handleDelete = (id)=>{
    const confirmDelete = window.confirm(
    "Are you sure want to delete this member ?"
    )

    if(confirmDelete){
      dispatch(deleteMember(id))
    }
  }
  // const members = [
  //   {
  //     id: 1,
  //     name: "Ankit",
  //     email: "ankit@gmail.com",
  //     phone: "9876543210"
  //   },
  //   {
  //     id: 2,
  //     name: "Rahul",
  //     email: "rahul@gmail.com",
  //     phone: "9876543211"
  //   }
  // ];

  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {members.map((member) => (
          <tr key={member.id}>
            <td>{member.id}</td>
            <td>{member.name}</td>
            <td>{member.email}</td>
            <td>{member.phone}</td>
            <td>
              <Link
                  to={`/members/edit/${member.id}`}
                  className="btn btn-warning btn-sm me-2"
              >
                Edit
              </Link>
              
              <Link
                  to={`/members/view/${member.id}`}
                  className="btn btn-info btn-sm"
              >
                View
              </Link>
              <button
              className="btn btn-danger btn-sm"
              onClick={()=>handleDelete(member.id)}>
               Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MemberTable;

