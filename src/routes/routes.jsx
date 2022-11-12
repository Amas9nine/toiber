import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

export function PublicRoute({ Component }) {
  const { isAuth } = useAuth();
  return isAuth ? <Navigate to="/" /> : <Component />;
}

export function PrivateRoute({ Component }) {
  const { isAuth } = useAuth();
  return isAuth ? <Component /> : <Navigate to="/dashboard" />;
}
