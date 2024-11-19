import { useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogIn, isLoggedInSelector } from "../API/slices/isLoggedInSlice";

interface AuthContextType {
  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
}

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: Props) => {
  const isLoggedIn = useSelector(isLoggedInSelector);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logIn = (): void => {
    dispatch(setLogIn(true));
    navigate("/catalog");
  };

  const logOut = (): void => {
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        logIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default useAuth;
