import { Link } from "react-router";

import MemberTable from "../../components/members/MemberTable";

const Members = () => {
  return (
    <div>
      <h2>Members</h2>

      <Link to="/members/add">
        <button>Add Member</button>
      </Link>

      <MemberTable />
    </div>
  );
};

export default Members;
