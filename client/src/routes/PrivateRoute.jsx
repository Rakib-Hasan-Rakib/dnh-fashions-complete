import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    // return <Loader />;
    return "Loading...";
  }

  if (user) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
