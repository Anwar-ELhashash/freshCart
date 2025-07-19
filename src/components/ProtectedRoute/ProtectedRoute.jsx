import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { TokenContext } from "../../context/Token.context";

export default function ProtectedRoute({ children }) {
  const { token } = useContext(TokenContext);
  const location = useLocation();

  // if user login will send you to any page
  if (token === null) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  } else {
    return children;
  }
}
