import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container">
      <h1>NearbyFix</h1>
      <p>Your emergency service partner for bike & car repairs</p>
      <Link to="/register">User Registration</Link>
      <Link to="/provider/register">Service Provider Registration</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default HomePage;
