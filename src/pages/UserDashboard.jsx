import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  return (
    <div className="container">
      <h2>User Dashboard</h2>
      <p>Track your service requests and history</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserDashboard;