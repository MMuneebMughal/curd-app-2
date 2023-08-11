import PropTypes from 'prop-types';
import { useState, createContext, useEffect } from 'react';
import { getAllUser } from '../api';

export const AuthContext = createContext({
  isLogIn: Boolean,
  checkLogin: () => {},
  checkLogOut: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLogIn, setIsLogIn] = useState(false);

  //All Users
  const [allUser, setAllUser] = useState([]);
  useEffect(() => {
    async function fetchUser() {
      const res = await getAllUser();
      setAllUser(res);
    }
    fetchUser();
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      setIsLogIn(true);
    }
  }, []);

  // Log in
  const checkLogin = (data) => {
    const userFound = allUser.find(
      (user) => user.email === data.email && user.password === data.password
    );
    if (userFound) {
      setIsLogIn(true);
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      alert('Enter the valid Email And Password');
    }
  };

  // Log out
  const checkLogOut = () => {
    setIsLogIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <AuthContext.Provider
      value={{
        isLogIn,
        checkLogin,
        checkLogOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
