import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from './contexts.js';

interface Props {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const localStorageToken = localStorage.getItem('userId');

  const initLoggedIn = (): boolean => {
    if (localStorageToken) {
      return true;
    }
    return false;
  };

  const [loggedIn, setLoggedIn] = useState(initLoggedIn());

  const navigate = useNavigate();

  const logIn = (): void => setLoggedIn(true);
  const logOut = (): void => {
    localStorage.removeItem('userId');
    setLoggedIn(false);
    navigate('/')
  };

  return (
    <AuthContext.Provider value={{
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