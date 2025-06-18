import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import ProviderRegisterPage from './pages/ProviderRegisterPage';
import LoginPage from './pages/LoginPage';
import ProviderLoginPage from './pages/ProviderLoginPage';
import ProviderDashboard from './pages/ProviderDashboard';
import UserDashboard from './pages/UserDashboard';
import RequestServicePage from './pages/RequestServicePage';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/provider/register" element={<ProviderRegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/provider/login" element={<ProviderLoginPage />} />
      
     {/* Protected Dashboard Routes */}
      <Route
        path="/user/dashboard"
        element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/provider/dashboard"
        element={
          <ProtectedRoute>
            <ProviderDashboard />
          </ProtectedRoute>
        }
      />

      {/* Optional: protect request-service page too */}
      <Route
        path="/request-service"
        element={
          <ProtectedRoute>
            <RequestServicePage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;