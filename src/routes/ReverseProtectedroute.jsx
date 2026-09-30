import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";

const ReverseProtectedRoute = () => {
  const isLoggedIn = useSelector(
    (state) => state.auth.isLoggedIn
  );

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return <Outlet/>;
};

export default ReverseProtectedRoute;