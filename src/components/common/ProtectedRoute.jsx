import { Navigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

export default function ProtectedRoute(Props) {
  const { children } = Props;
  const { isAuthenticated } = useAuth();

  let element = children;

  if (!isAuthenticated) {
    element = <Navigate to="/login" />;
  }

  return element;
}
