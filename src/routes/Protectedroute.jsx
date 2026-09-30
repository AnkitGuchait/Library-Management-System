import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {

  const isLoggedIn = useSelector(
    (state) => state.auth.isLoggedIn
  );

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

