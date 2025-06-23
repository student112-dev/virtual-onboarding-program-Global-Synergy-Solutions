import React, { useState } from 'react';
import api from '../api';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.user.role);

      if (res.data.user.role === 'admin') {
        window.location.href = '/admin';
      } else {
        window.location.href = '/employee';
      }
    } catch (err) {
      setError('Invalid Credentials');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleLogin}>
        <input className="form-control mb-2" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
        <input className="form-control mb-2" type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
