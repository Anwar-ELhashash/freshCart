import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const TokenContext = createContext(null);

export default function TokenProvider({ children }) {
  const [token, setToken] = useState(
    localStorage.getItem("token") || sessionStorage.getItem("token")
  );

  function logOut() {
    setToken(null);
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  }

  return (
    <TokenContext.Provider value={{ token, setToken, logOut }}>{children}</TokenContext.Provider>
  );
}
