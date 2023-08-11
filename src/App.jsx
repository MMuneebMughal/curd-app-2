import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { Login } from './auth/Login';
import { Router } from './routes/Router';

export const App = () => {
  const { isLogIn } = useContext(AuthContext);
  return isLogIn === true ? <Router /> : <Login />;
};
