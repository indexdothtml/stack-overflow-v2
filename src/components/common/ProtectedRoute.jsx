import { Navigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { useNotify } from "../../hooks/useNotify";

export default function ProtectedRoute(Props) {
  const { children } = Props;
  const { isAuthenticated } = useAuth();
  const { showNotification } = useNotify();

  let element = children;

  if (!isAuthenticated) {
    element = <Navigate to="/login" />;
    showNotification("Please login to your account", "error");
  }

  return element;
}
