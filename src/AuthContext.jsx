// src/AuthContext.jsx
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Check storage on load to see if user is remembered
  const [user, setUser] = useState(() => {
    return localStorage.getItem('sacalii_user') || null;
  });

  const login = (username) => {
    setUser(username);
    localStorage.setItem('sacalii_user', username); // Save to storage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sacalii_user'); // Clear storage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);