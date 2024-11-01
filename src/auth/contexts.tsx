import { createContext } from "react";

interface AuthContextType {
  loggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
