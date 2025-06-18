import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

const ProviderRegisterPage = () => {
  const [form, setForm] = useState({
    name: '', serviceType: '', phone: '', email: '', isAvailable: true
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/providers/register', form);
      alert('Provider registered!');
    } catch (err) {
      alert('Error registering provider');
    }
  };

  return (
    <div className="form-container">
      <h2>Service Provider Registration</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" onChange={handleChange} required />
        <input name="serviceType" placeholder="Service Type (e.g., bike, car)" onChange={handleChange} required />
        <label>
          Available:
          <input name="isAvailable" type="checkbox" checked={form.isAvailable} onChange={handleChange} />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default ProviderRegisterPage;