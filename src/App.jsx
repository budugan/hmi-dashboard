// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import EquipmentStatus from './pages/EquipmentStatus';
import ErrorsPersonnel from './pages/ErrorsPersonnel';
import QualityInspection from './pages/QualityInspection';
import Login from './pages/Login';

// Helper Component: Protects routes from unauthenticated users
const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  // Check localStorage immediately to see if user was already logged in
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('auth') === 'true';
  });

  const handleLogin = () => {
    localStorage.setItem('auth', 'true'); // Save to browser storage
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('auth'); // Clear storage
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* Protected Routes */}
        <Route path="/" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Dashboard />
          </ProtectedRoute>
        } />
        
        <Route path="/equipment" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <EquipmentStatus />
          </ProtectedRoute>
        } />
        
        <Route path="/quality" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <QualityInspection />
          </ProtectedRoute>
        } />
        
        <Route path="/errors" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ErrorsPersonnel />
          </ProtectedRoute>
        } />

        {/* Catch-all: Redirect to dashboard (which will redirect to login if needed) */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;