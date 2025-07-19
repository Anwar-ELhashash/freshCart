import { useContext } from "react";
import { Navigate } from "react-router";
import { TokenContext } from "../../context/Token.context";

export default function GuardRoute({ children }) {
  const { token } = useContext(TokenContext);

  // if user login will not send you to (login, signup, verifyEmail, forgot-password)
  if (token === null) {
    return children;
  } else {
    return <Navigate to="/home" />;
  }
}
