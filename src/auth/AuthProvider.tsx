import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";

interface AuthContextType {
  loggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
}

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: Props) => {
  const localStorageToken = localStorage.getItem("userId");

  const initLoggedIn = () => {
    if (localStorageToken) {
      return true;
    }
    return false;
  };

  const [loggedIn, setLoggedIn] = useState(initLoggedIn());

  const navigate = useNavigate();

  const logIn = (): void => {
    setLoggedIn(true);
    navigate("/catalog");
  };

  const logOut = (): void => {
    localStorage.removeItem("userId");
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        logIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default useAuth;
