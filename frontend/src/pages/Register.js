import React, { useState } from 'react';
import api from '../api';

const Register = () => {
  const [form, setForm] = useState({
    name: '', email: '', password: '', timezone: '', language: ''
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', form);
      alert('Registered Successfully!');
      window.location.href = '/';
    } catch (err) {
      alert('Registration Failed');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input className="form-control mb-2" placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input className="form-control mb-2" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
        <input className="form-control mb-2" type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
        <input className="form-control mb-2" placeholder="Timezone" onChange={e => setForm({ ...form, timezone: e.target.value })} />
        <input className="form-control mb-2" placeholder="Language" onChange={e => setForm({ ...form, language: e.target.value })} />
        <button className="btn btn-success">Register</button>
      </form>
    </div>
  );
};

export default Register;
