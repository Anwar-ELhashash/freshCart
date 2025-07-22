import { Navigate } from "react-router";
import { useSelector } from "react-redux";

export default function GuardRoute({ children }) {
  // Using Redux With Token
  const { token } = useSelector((store) => {
    return store.tokenReducer;
  });

  // if user login will not send you to (login, signup, verifyEmail, forgot-password)
  if (token === null) {
    return children;
  } else {
    return <Navigate to="/home" />;
  }
}
