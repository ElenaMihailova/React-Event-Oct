import { createContext } from "react";

interface AuthContextType {
  loggedIn: boolean;
  logIn: (value: unknown) => void;
  logOut: () => void;
  initLoggedIn: (isLoggedIn: boolean) => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
