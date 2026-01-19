// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Import context

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Get login function

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      login(username); // Save user to global state
      navigate('/');   // Go to Dashboard
    } else {
      setError('Invalid credentials. Try admin / admin');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sacalii-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-sacalii-teal transform -skew-y-3 origin-top-left z-0"></div>
      <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-sacalii-gold w-full max-w-md z-10 relative">
        <div className="flex flex-col items-center mb-8">
          <img src="/logo-final.png" alt="Sacalii Limited" className="w-24 h-24 mb-4 object-contain" />
          <h2 className="text-2xl font-bold text-sacalii-dark uppercase tracking-widest">Sacalii Limited</h2>
          <p className="text-gray-500 text-sm">HMI Control Panel</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded border border-gray-300 focus:border-sacalii-teal outline-none"
              placeholder="Enter username"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded border border-gray-300 focus:border-sacalii-teal outline-none"
              placeholder="Enter password"
            />
          </div>
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          <button type="submit" className="w-full bg-sacalii-gold hover:opacity-90 text-white font-bold py-3 rounded shadow-md">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;