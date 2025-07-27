import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!email.endsWith('@admin.com')) {
      setError('Admin email must end with @admin.com');
      return;
    }

    try {
     const res = await fetch('http://localhost:5000/api/admin/signup', {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ Admin successfully created, go to login page
        navigate('/admin/login');
      } else {
        setError(data.message || 'Signup failed');
      }
    } catch (err) {
      setError('Something went wrong');
    }
  };

  const formStyle = {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '30px',
    borderRadius: '10px',
    background: '#fff',
    boxShadow: '0px 0px 15px rgba(0,0,0,0.1)',
    fontFamily: 'Arial',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '6px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  const linkStyle = {
    textAlign: 'center',
    marginTop: '15px',
  };

  const errorStyle = {
    color: 'red',
    marginTop: '10px',
    textAlign: 'center'
  };

  return (
    <div style={formStyle}>
      <h2 style={{ textAlign: 'center' }}>Admin Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Admin Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Sign Up</button>
        {error && <p style={errorStyle}>{error}</p>}
        <p style={linkStyle}>
          Already have an account? <Link to="/admin/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default AdminSignup;
