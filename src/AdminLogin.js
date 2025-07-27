import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();
  setError('');

  try {
    const res = await fetch('http://localhost:5000/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok && data.role === 'admin') {
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);
      localStorage.setItem('name', data.name);
      navigate('/add-car');
    } else {
      setError(data.message || 'Access denied: Only admins can log in here.');
    }
  } catch (err) {
    setError('Something went wrong. Please try again.');
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
    textAlign: 'center',
    marginTop: '10px'
  };

  return (
    <div style={formStyle}>
      <h2 style={{ textAlign: 'center' }}>Admin Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit" style={buttonStyle}>Login</button>
        {error && <p style={errorStyle}>{error}</p>}
        <p style={linkStyle}>
          Don't have an account? <Link to="/admin/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default AdminLogin;
