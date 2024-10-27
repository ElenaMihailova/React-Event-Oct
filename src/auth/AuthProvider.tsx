import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./contexts";

interface Props {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const logIn = (): void => {
    setLoggedIn(true);
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

export default AuthProvider;
