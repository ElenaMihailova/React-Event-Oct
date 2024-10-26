import { useState } from "react";
import AuthContext from "./contexts";

interface Props {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const localStorageToken = localStorage.getItem("userId");

  const initLoggedIn = (): boolean => {
    if (localStorageToken) {
      return true;
    }
    return false;
  };

  const [loggedIn, setLoggedIn] = useState(initLoggedIn());

  const logIn = (): void => setLoggedIn(true);
  const logOut = (): void => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        logIn,
        logOut,
        initLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
