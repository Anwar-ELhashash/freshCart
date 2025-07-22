import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";

export default function ProtectedRoute({ children }) {
  // Using Redux With Token
  const { token } = useSelector((store) => {
    return store.tokenReducer;
  });

  const location = useLocation();

  // if user login will send you to any page
  if (token === null) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  } else {
    return children;
  }
}
