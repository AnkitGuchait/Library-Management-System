import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div className="bg-dark text-white p-3" style={{ width: "220px", minHeight: "100vh" }}>

      <h4 className="mb-4">Library</h4>

      <nav className="d-flex flex-column gap-2">

        <NavLink to="/dashboard" className="text-white text-decoration-none">
          📊 Dashboard
        </NavLink>

        <NavLink to="/books" className="text-white text-decoration-none">
          📚 Books
        </NavLink>

        <NavLink to="/members" className="text-white text-decoration-none">
          👥 Members
        </NavLink>

        <NavLink to="/issue-book" className="text-white text-decoration-none">
          📖 Issue Book
        </NavLink>

        <NavLink to="/issued-books" className="text-white text-decoration-none">
          📖 Issued-Books
        </NavLink>

        <NavLink to="/history" className="text-white text-decoration-none">
          📋 History
        </NavLink>

        <NavLink to="/fines" className="text-white text-decoration-none">
          💰 Fines
        </NavLink>

      </nav>

    </div>
  );
};

export default Sidebar;