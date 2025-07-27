import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';

const UserLogin = ({ setIsAuthenticated }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!formData.email || !formData.password) {
      setError('Email and password are required');
      setIsLoading(false);
      return;
    }

    if (!isLogin && !formData.name) {
      setError('Name is required for signup');
      setIsLoading(false);
      return;
    }

    try {
      if (isLogin) {
        const response = await axios.post('http://localhost:5000/api/user/login', {
          email: formData.email,
          password: formData.password
        });

        if (response.data.success) {
          setIsAuthenticated(true);
          if (formData.rememberMe) {
            localStorage.setItem('rememberMe', 'true');
          }
          navigate('/services');
        } else {
          setError(response.data.message || 'Invalid username or password');
        }
      } else {
        const response = await axios.post('http://localhost:5000/api/user/signup', {
          name: formData.name,
          email: formData.email,
          password: formData.password
        });

        if (response.data.success) {
          setIsLogin(true);
          setFormData(prev => ({ ...prev, name: '' }));
          setError('Signup successful! Please login with your credentials.');
        } else {
          setError(response.data.message || 'Signup failed. Please try again.');
        }
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 
                         (isLogin ? 'Invalid username or password' : 'Signup failed. Please try again.');
      setError(errorMessage);
      console.error('Auth error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>{isLogin ? 'Log in' : 'Sign up'}</h2>

        {error && (
          <div style={{
            ...styles.error,
            color: error.includes('successful') ? 'green' : '#d32f2f',
            backgroundColor: error.includes('successful') ? '#e8f5e9' : '#fdecea'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          {!isLogin && (
            <div style={styles.inputGroup}>
              <label style={styles.label}>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                style={styles.input}
                required
              />
            </div>
          )}

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.passwordContainer}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                style={styles.input}
                required
                minLength="6"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.eyeButton}
              >
                {showPassword ? <FaEyeSlash style={styles.eyeIcon} /> : <FaEye style={styles.eyeIcon} />}
              </button>
            </div>
          </div>

          {isLogin && (
            <div style={styles.rememberContainer}>
              <label style={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  style={styles.checkbox}
                />
                <span style={styles.checkmark}></span>
                Remember me
              </label>
              <a href="/forgot-password" style={styles.forgotPassword}>
                Forgot password?
              </a>
            </div>
          )}

          <button
            type="submit"
            style={{
              ...styles.submitButton,
              opacity: isLoading ? 0.7 : 1,
              cursor: isLoading ? 'not-allowed' : 'pointer'
            }}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : isLogin ? 'Log in' : 'Sign up'}
          </button>
        </form>

        <div style={styles.switchContainer}>
          <p style={styles.switchText}>
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
              }}
              style={styles.switchButton}
            >
              {isLogin ? 'Sign up' : 'Log in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  card: {
    width: '100%',
    maxWidth: '420px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    padding: '40px',
    border: '1px solid #e6e6e6'
  },
  title: {
    color: '#1976d2',
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '28px',
    fontWeight: '600'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  label: {
    color: '#555555',
    fontSize: '14px',
    fontWeight: '500'
  },
  input: {
    padding: '14px',
    border: '1px solid #dddddd',
    borderRadius: '6px',
    fontSize: '15px',
    outline: 'none',
    transition: 'border 0.2s',
    width: '100%',
    boxSizing: 'border-box'
  },
  passwordContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  eyeButton: {
    position: 'absolute',
    right: '12px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '5px'
  },
  eyeIcon: {
    color: '#1976d2',
    fontSize: '18px'
  },
  rememberContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '5px'
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    paddingLeft: '28px',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#555555',
    userSelect: 'none'
  },
  checkbox: {
    position: 'absolute',
    opacity: 0,
    cursor: 'pointer',
    height: 0,
    width: 0
  },
  checkmark: {
    position: 'absolute',
    left: 0,
    height: '18px',
    width: '18px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '3px'
  },
  forgotPassword: {
    fontSize: '14px',
    color: '#1976d2',
    textDecoration: 'none',
    fontWeight: '500'
  },
  submitButton: {
    backgroundColor: '#1976d2',
    color: 'white',
    border: 'none',
    padding: '14px',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    marginTop: '10px',
    width: '100%'
  },
  switchContainer: {
    textAlign: 'center',
    marginTop: '25px'
  },
  switchText: {
    color: '#666666',
    fontSize: '15px'
  },
  switchButton: {
    background: 'none',
    border: 'none',
    color: '#1976d2',
    cursor: 'pointer',
    fontWeight: '600',
    padding: '0',
    marginLeft: '5px',
    fontSize: '15px'
  },
  error: {
    color: '#d32f2f',
    backgroundColor: '#fdecea',
    padding: '12px',
    borderRadius: '6px',
    marginBottom: '20px',
    fontSize: '14px',
    textAlign: 'center'
  }
};

export default UserLogin;