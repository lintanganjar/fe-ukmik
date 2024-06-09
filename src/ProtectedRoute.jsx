import { Navigate } from "react-router-dom";
import { useAuthStore } from "./stores/useAuthStore";
export const ProtectedRoute = ({ redirectPath = "/login", children }) => {
  const { accessToken } = useAuthStore();

  if (!accessToken) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
