import React, { useEffect, useState, createContext } from 'react';

// Create Context for Auth
export const Authcontext = createContext();

export default function Contextapi({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  // Function to logout user
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  // Function to login user and store data in localStorage
  const login = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setToken(token);
    setUser(user);
  };

  // Function to retrieve token and user from localStorage
  const getTokenAndUser = () => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (savedToken) {
      setToken(savedToken);
    } else {
      setToken(null);
    }

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    getTokenAndUser(); // Retrieve token and user on initial load
  }, []); // Empty dependency array ensures this runs once

  return (
    <Authcontext.Provider value={{ token, user, logout, login }}>
      {children}
    </Authcontext.Provider>
  );
}
