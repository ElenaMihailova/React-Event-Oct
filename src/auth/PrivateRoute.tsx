import { Navigate, useLocation } from "react-router-dom";
import useAuth from "./AuthProvider";

interface Props {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: Props) => {
  const auth = useAuth();
  const location = useLocation();

  return auth.isLoggedIn ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
};

export default PrivateRoute;
