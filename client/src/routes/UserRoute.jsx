import ErrorAnim from "../components/shared/animations/ErrorAnim";
import LoadingSpin from "../components/shared/spin/LoadingSpin";
import useAuth from "../hooks/useAuth";

const UserRoute = ({ children }) => {
  const { loading, admin } = useAuth();

  if (loading) {
    return <LoadingSpin />;
  }

  if (!admin) {
    return children;
  } else {
    return <ErrorAnim />;
  }
};
export default UserRoute;
