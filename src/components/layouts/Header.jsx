import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../../slices/authslice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <span className="navbar-brand mb-0 h1">
        📚 Library Management
      </span>

      <div className="d-flex align-items-center gap-3">
        <span className="text-white">
          {user?.email}
        </span>

        <button
          className="btn btn-danger btn-sm"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Header;