import { useState, useContext, createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogIn } from "../API/slices/isLoggedInSlice";

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
const location = useLocation;
const fromPage = location?.state?.from?.pathname || '/catalog';
console.log(location?.state?.from?.pathname);

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
  const dispatch = useDispatch();

  const logIn = (): void => {
    setLoggedIn(true);
    dispatch(setLogIn(true));
    navigate(fromPage);
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
