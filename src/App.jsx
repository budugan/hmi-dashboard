// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext'; // Import the new Context
import Dashboard from './pages/Dashboard';
import EquipmentStatus from './pages/EquipmentStatus';
import ErrorsPersonnel from './pages/ErrorsPersonnel';
import QualityInspection from './pages/QualityInspection';
import Login from './pages/Login';

// Helper Component: Protects routes
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/equipment" element={<ProtectedRoute><EquipmentStatus /></ProtectedRoute>} />
          <Route path="/quality" element={<ProtectedRoute><QualityInspection /></ProtectedRoute>} />
          <Route path="/errors" element={<ProtectedRoute><ErrorsPersonnel /></ProtectedRoute>} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;